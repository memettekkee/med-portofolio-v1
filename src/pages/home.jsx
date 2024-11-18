import Navbar from "../components/Navbar";


export default function home() {
    return (
        <div className="bg-fixed bg-cover bg-center bg-no-repeat h-screen"
        style={{
            backgroundImage: "url('/assets/images/web-background.png')",
          }}>
            <Navbar/>
        </div>
    )
}