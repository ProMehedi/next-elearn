import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const TextEditor = ({ desc, setDesc }) => {
  return (
    <>
      <ReactQuill theme='snow' value={desc} onChange={setDesc} />
    </>
  )
}

export default TextEditor
