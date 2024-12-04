export default function Header() {
    return (
        <header className="w-svw   flex justify-between items-center p-2 border-b border-borderColor">
            <div>
                <h1 className="text-xl font-bold">Toledo viajes</h1>
            </div>

            <div>
                <button className="px-4 py-2 rounded-3xl bg-buttonColor">Iniciar sesión</button>
            </div>
        </header>
    )
}