import { FormEvent, useState, ChangeEvent } from 'react'
import { Form, Campo, BtnPesquisar } from './styles' // importando os styled components

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Form>
      <Campo />
      <BtnPesquisar>Pesquisar</BtnPesquisar>
    </Form>
  )
}

export default FormVagas
