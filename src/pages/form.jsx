import React from 'react'
import Layout from "@components/layout/layout"
import Container from "@components/ui/container"


export default function Form() {
  return (
    <>
    <div className='w-full h-[30vh] bg-[#87D6F2]'>
        <h1 className='pt-[15vh] text-4xl font-semibold text-center text-black font-josephine'>
            Seller Registration Form
        </h1>
        <p className='mt-5 text-center text-black font-normal font-josephine'>
            To become a seller at Tesoro Store, please fill up this form and we shall get back to you asap :)
        </p>
    </div>
    <Container>
        <div className='mt-10 justify-center flex'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4X9QKOhSIGn6NYp1rE4iX9alQHgjm5GMxPheGhViUSjAzjA/viewform?embedded=true" width="100%" height="3200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </Container>
    </>
  )
}

Form.Layout = Layout