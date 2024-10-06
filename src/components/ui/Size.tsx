
export default function Size({originalSize } : {originalSize : number}) {

  const size = originalSize < 1000 ? `${originalSize} Kb` : `${parseFloat((originalSize/1024).toFixed(2))} Mb`

  return (
    <div className="h-full min-h-fit grid grid-cols-2">
        <div className="col-span-1 text-xl font-semibold text-center flex flex-col justify-center items-center">Original Size : {size}</div>
        <div className="col-span-1 text-xl font-semibold text-center flex flex-col justify-center items-center">Compressed Size : 50kb</div>
    </div>
  )
}
