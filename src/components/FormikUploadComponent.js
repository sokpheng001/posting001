'use client'

import {useState} from "react";
import {Field, Form, Formik,ErrorMessage} from "formik";
import * as Yup from "yup"

import {Input} from "@material-tailwind/react"


const  validators = Yup.object({
    number: Yup.number().required("Number is required").positive()
})
const initialValues =  {
    number: null,
}

export default function FormikUploadComponent(){
    return (
        <Formik initialValues={initialValues} onSubmit={async (values,setSubmitting)=>{
            alert(JSON.stringify(values))
        }}>
            {({isSubmitting,setFieldValue})=>(
                <div className={""}>
                    <Form className={""}>
                        <Input
                            type="number"
                            placeholder="Number of product"
                            className="focus:!border-t-blue-500 shadow-none focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                            labelProps={{
                                className: "hidden"
                            }}

                            containerProps={{ className: "min-w-[100px]" }}
                        />
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export function imageUploadPreview({file}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [preview,setPreview] = useState(null);
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onload = () =>{
        setPreview(render.result);
    }
    return(
        <div className={""}>
            <img src={preview ? preview:"not-found"} alt={"Image preview"} className={""}/>
        </div>
    )
}