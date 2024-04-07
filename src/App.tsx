import { Routes, Route } from "react-router-dom"
import "./globals.css"
import SigninForms from "./_auth/forms/SigninForms"
import { Home } from "./_root/pages"
import SignUpForms from "./_auth/forms/SignUpForms"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes*/}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForms />} />
                    <Route path="/sign-up" element={<SignUpForms />} />
                </Route>


                {/* private routes*/}
                <Route element={<RootLayout />}>

                    <Route index element={<Home />} />
                </Route>

            </Routes>
            <Toaster/>
        </main>
    )
}

export default App