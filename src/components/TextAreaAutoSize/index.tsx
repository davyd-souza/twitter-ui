// DEPENDENCY
import {
  forwardRef,
  useRef,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from 'react'

export const TextAreaAutoSize = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ ...props }, ref) => {
  const [textAreaValue, setTextAreaValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTextAreaChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(evt.target?.value)
  }

  useEffect(() => {
    const node = textAreaRef.current
    if (node) {
      node.style.height = '0px'
      const scrollHeight = node.scrollHeight

      node.style.height = `${scrollHeight}px`
    }
  }, [ref, textAreaValue])

  return (
    <textarea
      rows={1}
      ref={(node) => {
        textAreaRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      }}
      onChange={handleTextAreaChange}
      value={textAreaValue}
      {...props}
    />
  )
})
