import Label from "./Label"
import Input from "./Input"
export default function TextInput(props) {
    const { label, values="", labelIcon, placeholder, type, name, showPassword, showLabel = false } = props
    return (
        <>
            <div className='flex flex-col gap-2 w-full text-gray-400 focus-within:text-gray-600 mb-2'>
                {showLabel && <Label>{label}</Label>}
                <div className="relative">
                    {
                        labelIcon !== undefined ? labelIcon : <Label>{label}</Label>
                    }

                    <Input placeholder={placeholder} type={type} name={name} id={name} showPassword={showPassword} value={values!==undefined ? values : ""} />
                </div>
            </div>
        </>
    )
}