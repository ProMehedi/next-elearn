import asyncHandler from 'express-async-handler'
import queryString from 'query-string'
import User from '../models/userModel.js'
import Stripe from 'stripe'
const stripeSecret =
  process.env.STRIPE_SECRECT_KEY || 'sk_test_bLz5Ubk44Y6HSf1tWjwvuEj500RnRZ1cd3'
const stripe = new Stripe(stripeSecret)

// @desc    Payout Instructor
// @route   GET /api/instructor
// @access  Private
export const payoutInstructor = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).exec()

  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({ type: 'express' })

    console.log(account)

    user.stripe_account_id = account.id
    user.save()

    let accountLink = await stripe.accountLinks.create({
      type: 'account_onboarding',
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
    })
    accountLink = Object.assign(accountLink, {
      'stripe_user[email]': user.email,
    })

    res
      .status(201)
      .send(`${accountLink.url}?${queryString.stringify(accountLink)}`)
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
