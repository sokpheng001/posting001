'use client'
import {Field, Form, Formik,ErrorMessage} from "formik";
import * as Yup from "yup"
import {PiSubtitlesFill} from "react-icons/pi"
import {Button} from "@material-tailwind/react";
import axios from "axios";
//API
import UPLOAD_FILE_API from "@/api/UPLOAD_FILE_API"
import { useEffect, useState} from "react";


// posting api
const api = async ()=>{
    const api =  await fetch(``);
    const data = await api.json();
    return data;
}
// upload file api
const  uploadFile = async (file)=>{
    const formData = new FormData();
    formData.append("file", file);
    const upload = await axios.post(UPLOAD_FILE_API,formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progress)=>{
        //     setProgress
        }
    });
}

const  validators = Yup.object({
    number: Yup.number().required("Number is required").positive(),
    title: Yup.string().required("Title is required."),
    file: Yup.mixed().required("File is required"),
    description: Yup.string().required("Description is required to make your content more readable."),
})
const initialValues =  {
    number: 0,
    title: "",
    file:null,
    description:""
}


export default function BlockUploadFormComponent(){
    const [backgroundUpload,setBackgroundUpload] = useState("");
    const [hidden,setHidden] = useState("")
    return (
        <div className={"grid grid-cols-1 "}>
            <Formik validationSchema={validators}  initialValues={initialValues} onSubmit={async (values,
                                                                                                  {
                                                                                                      setSubmitting,
                                                                                                      setTouched,
                                                                                                      setValues,
                                                                                                      setErrors,
                                                                                                      resetForm
                                                                                                  }
            )=>{
                alert(JSON.stringify(values));
            }}>
                {(
                    {
                        values,
                        isSubmitting,
                        setFieldValue,
                        touched,
                        errors,
                        handleChange
                    })=>(
                    <Form onClick={(event)=>{event.type}} className={"rounded-lg"}>
                        <label htmlFor="title" className="text-lg font-bold text-black tracking-wide">Title</label>
                        <div className="relative w-full mt-2">
                            {/*icon*/}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <PiSubtitlesFill color={"gray"}/>
                            </div>
                            <Field

                                type="text" id="title" name="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg duration-10000 focus:ring-gray-200 focus:bg-gray-200 focus:outline-0 focus:border-gray-300 block w-full pl-10 p-2.5 "
                                placeholder="Title"/>
                        </div>
                        <ErrorMessage name={"title"} className={"text-red-500 mt-2"} component={"div"}/>
                        {/*upload file*/}
                        <div className="grid grid-cols-1 space-y-2 mt-5 max-w-full">
                            <label htmlFor={"thumbnail"} className="text-lg font-bold text-black tracking-wide">Thumbnail</label>
                            <div
                                onClick={()=>{setBackgroundUpload(" bg-gray-200 border-white");setHidden(" hidden")}}
                                className="flex justify-center items-center md:flex hover:cursor-pointer">
                                <label
                                    className={" md:w-1/2 w-full flex flex-col rounded-lg border-4 hover:cursor-pointer border-dashed  h-60 p-10 group text-center " + backgroundUpload}>
                                    <div
                                        className={"h-full w-full text-center flex flex-col items-center justify-center " + hidden}>
                                        <p className="pointer-none text-gray-500 ">
                                            <span className="text-sm">Upload </span>
                                            <a id="" className="text-blue-gray-600 hover:underline animate-bounce">Thumbnail</a>
                                        </p>
                                    </div>
                                    <Field id={"thumbnail"}
                                           type="file" name={"file"}
                                           className="hidden"
                                           setFieldvalue={setFieldValue}
                                           component = {imageUploadPreview}
                                    />
                                </label>
                            </div>
                        </div>
                        {/*end of upload file*/}
                        {/*description*/}
                        <div className={"grid grid-cols-1 space-y-2 mt-5"}>
                            <label htmlFor={"description"} className="text-lg font-bold text-black tracking-wide">Description</label>
                            <Field
                                id="description"
                                component={"textarea"}
                                name="description"
                                className="mt-5 bg-gray-50 duration-10000 focus:bg-gray-200 focus:ring-gray-200 block w-full p-4 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-0 focus:ring-0"
                                placeholder="Write your description..."
                            />
                            <ErrorMessage name={"description"} component={"div"} className={"mt-2 text-red-500"} />
                        </div>
                        {/*end*/}
                        <div className={"md:float-right gap-4 flex justify-center"}>
                            {/*group of button*/}
                            <div className={"mt-5 flex flex-col w-full md:flex-row gap-4 items-center"}>
                                {/*clear*/}
                                <Button type={"reset"}
                                        disabled={isSubmitting}
                                        className={"w-full md:w-56 shadow-sm shadow-gray-200 hover:shadow-gray-200 hover:shadow-lg text-black bg-gray-300 p-2 rounded-lg h-10"}>
                                    {"Clear"}
                                </Button>
                                {/*post*/}
                                <Button type={"submit"}
                                        disabled={isSubmitting}
                                        className={"w-full md:w-56 shadow-sm shadow-gray-200 hover:shadow-gray-200 hover:shadow-lg text-black bg-gray-300 p-2 rounded-lg h-10 md:mt-0"}>
                                    {"Post"}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export const imageUploadPreview = ({
                              field,
                              form,
                              setFieldValue,
                              isSubmitting,
                              ...props
                          }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [imagePreview, setImagePreview] = useState(null);
    // this function is used handle the file selection
    const handleChange = (event) => {
        event.preventDefault();
        const file = event.currentTarget.files[0];
        // call setFieldValue and pass the field name and file object to it
        setFieldValue(field.name, file);
        // URL.createObjectURL() converts the selected file into a URL which can be used
        // to display preview of the selected file
        setImagePreview(URL.createObjectURL(file));
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [type, setType] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (isSubmitting) {
            setImagePreview(null);
        }
    }, [isSubmitting]);

    return (
        <div className="grid grid-cols-1 space-y-2 max-w-full">
        <section className={"rounded-lg w-full flex justify-center items-center"}>
            <input
                className=""
                type="file"
                onChange={(event) => {
                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                    setImagePreview(
                        window.URL.createObjectURL(event.currentTarget.files[0])
                    );
                    setType(event.currentTarget.files[0].type);
                    console.log(type === "");
                }}
                {...props}
            />
            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="preview"
                    className="object-cover rounded-lg h-1/2"
                />
            )}
        </section>
        </div>
    );
};
