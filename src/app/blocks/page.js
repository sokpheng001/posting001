import FormikUploadComponent from "@/components/formik/FormikUploadComponent";

export const metadata = {
    title: "Blocks - Cambodia Remix",
    description: "Welcome to Cambodia Remix for Blocks section",
};


export default function Block (){
    return (
        <main className={"container m-auto"}>
            <FormikUploadComponent/>
        </main>
    )
}