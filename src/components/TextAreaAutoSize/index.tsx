// DEPENDENCY
import { TextareaHTMLAttributes, ChangeEvent } from 'react'

// TYPE
interface TextAreaAutoSizeProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onTextChange: (text: string) => void
}

export function TextAreaAutoSize({
  onTextChange,
  ...props
}: TextAreaAutoSizeProps) {
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    if (onTextChange) {
      onTextChange(evt.target.value)
    }
    evt.target.style.height = '0px'
    const scrollHeight = evt.target.scrollHeight

    evt.target.style.height = `${scrollHeight}px`
  }

  return <textarea rows={1} onChange={handleChange} {...props} />
}
