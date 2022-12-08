import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Feira from './pages/Feira';
import Carrinho from './pages/Carrinho';
import { useState } from 'react';

function Router() {
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <Login
                            nome={nome}
                            setNome={setNome}
                            saldo={saldo}
                            setSaldo={setSaldo}
                        />
                    }
                >
                </Route>
                <Route
                    path='/feira'
                    element={
                        <Feira
                            nome={nome}
                            setNome={setNome}
                            saldo={saldo}
                            setSaldo={setSaldo}
                        />
                    }
                >
                </Route>
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
