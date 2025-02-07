import React from "react";
import Providers from "./Providers.tsx";
import AppRoutes from "./routes";


const App: React.FC = () => {
    return (
        <Providers>
            <div className="bg-canvas w-full h-full font-vietnam text-white font-regular">
                <AppRoutes />
            </div>
        </Providers>
    );
}

export default App;