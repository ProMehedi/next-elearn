import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const TextEditor = ({ desc, course, setDesc }) => {
  return (
    <>
      <ReactQuill
        theme='snow'
        value={desc}
        onChange={(e) => setDesc({ ...course, desc: e.target.value })}
      />
    </>
  )
}

export default TextEditor
