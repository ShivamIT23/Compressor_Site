
export default function Size() {
  return (
    <div className="h-full min-h-fit grid grid-cols-2">
        <div className="col-span-1 text-xl font-semibold text-center flex flex-col justify-center items-center">Original Size : 150kb</div>
        <div className="col-span-1 text-xl font-semibold text-center flex flex-col justify-center items-center">Compressed Size : 50kb</div>
    </div>
  )
}
