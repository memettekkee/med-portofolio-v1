import Navbar from "../components/Navbar";

export default function about() {
    return (
        <div className="h-screen bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
            backgroundImage: "url('/assets/images/web-background.png')",
        }}>
            
        <Navbar />
    </div>
    )
}