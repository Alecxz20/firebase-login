function Input(props) {
  return (
    <div className="flex justify-between items-center mt-4 max-w-[500px] gap-4">
        {props.label && <label>{props.label}</label>}
        <input className="border-2 border-green-800 py-1 px-4 rounded-lg outline-green-600" type={props.type} {...props} />
    </div>
  )
}

export default Input