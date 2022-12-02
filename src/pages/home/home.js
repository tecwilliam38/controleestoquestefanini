import React from 'react'

export default function HomeScreen() {
    return (
        <>
            <div className='bgHome'>
                <div className='container pt-1 pt-md-5'>
                    <div class="jumbotron">
                        <h1 class="display-5 text-center mb-4">Sistema de Gerenciamento de Equipamentos</h1>
                        <p class="lead">Sistema para controle de estoque e alteração de equipamentos da Gestão de ativos.</p>
                        <hr class="my-4" />
                        <p>Sistema feito por William Ferreira, para mais informações, entre em contato: (21)96920-3932</p>
                    </div>
                </div>
                <footer className='d-flex justify-content-center fixed-bottom container-fluid'>
                    <p class="mt-5 mb-3 text-light">William Ferreira da Silva &copy; 1981-2022</p>
                </footer>
            </div>

        </>
    )
}
