

export default function CardMenu({name, ingredients, img}) {

    return (
        <>

            <article className="cursor-pointer shadow-xl flex flex-col justify-between items-center gap-4 py-10 px-6 bg-white/80">
                <div className=" w-fit px-8 py-4 rounded-xl">
                    <img className="size-56 object-contain aspect-square" src={img} alt="" />
                </div>

                <div className="flex flex-col gap-4 mt-4 max-w-72 top-0">
                    <h3 className='text-xl font-semibold text-zinc-600'>{name}</h3>
                    <p><strong className="text-rose-500">Ingredientes: </strong><span className='text-gray-800 font-medium' >{ingredients}</span> </p>
                </div>
            </article>


        </>
    );
}