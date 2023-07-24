import React from 'react';
import {
    Box,
} from "@chakra-ui/react";
import { FaTruck, FaFlag, FaCheck, FaBox, FaExclamationCircle, FaTimesCircle } from "react-icons/fa"; // Aqui importamos os ícones do pacote react-icons/fa
import logoCorreios from '../assets/correios.svg'

const getIconForStatus = (status) => {
    const statusDict = {
        "Objeto postado": <FaBox />,
        "Objeto recebido pelos Correios do Brasil": <FaFlag />,
        "Fiscalização aduaneira finalizada": <FaCheck />,
        "Objeto encaminhado": <FaTruck />,
        "Objeto saiu para entrega ao destinatário": <FaExclamationCircle />,
        "Saída para entrega cancelada": <FaTimesCircle />,
        "Objeto entregue ao destinatário": <FaCheck />,
    }
    return statusDict[status] || <FaBox />
}

const TrackingInfo = ({ trackingData }) => {
    if (!trackingData) {
        return null;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h3>Dados de rastreamento para: {trackingData.codigo}</h3>
                <a href={'https://rastreamento.correios.com.br/app/index.php'} target="_blank" rel="noopener noreferrer">
                    <img
                        src={logoCorreios}
                        style={{ display: 'inline-block', margin: '5px', width: '100px', height: '50px' }}
                        alt="Correios"
                        title='Correios'
                    />
                </a>
                {trackingData.eventos.map((evento, index) => {
                    // Separa a origem e o destino a partir do array subStatus
                    const [origem, destino] = evento.subStatus.map((sub) => sub.split(": ")[1]);

                    return (

                        // <div key={index} style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}>
                        <div className="card">
                            <div className="tools">
                                <div className="circle">
                                    <span className="red box"></span>
                                </div>
                                <div className="circle">
                                    <span className="yellow box"></span>
                                </div>
                                <div className="circle">
                                    <span className="green box"></span>
                                </div>
                            </div>
                            <div className="card__content">
                            </div>
                            <Box mb="4" fontSize="2xl">
                                {getIconForStatus(evento.status)} {/* Ícone correspondente ao status */}
                                {evento.status}
                            </Box>
                            <p><strong>Local:</strong> {evento.local}</p>
                            <p><strong>Data:</strong> {evento.data} às {evento.hora}</p>
                            <p><strong>Origem:</strong> {origem}</p>
                            {destino && <p><strong>Destino:</strong> {destino}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrackingInfo;

// Backup
// import React from 'react';
// import {
//     Box,
// } from "@chakra-ui/react";
// import { FaTruck, FaFlag, FaCheck, FaBox, FaExclamationCircle, FaTimesCircle } from "react-icons/fa"; // Aqui importamos os ícones do pacote react-icons/fa
// import logoCorreios from '../assets/correios.svg'

// const getIconForStatus = (status) => {
//     const statusDict = {
//         "Objeto postado": <FaBox />,
//         "Objeto recebido pelos Correios do Brasil": <FaFlag />,
//         "Fiscalização aduaneira finalizada": <FaCheck />,
//         "Objeto encaminhado": <FaTruck />,
//         "Objeto saiu para entrega ao destinatário": <FaExclamationCircle />,
//         "Saída para entrega cancelada": <FaTimesCircle />,
//         "Objeto entregue ao destinatário": <FaCheck />,
//     }
//     return statusDict[status] || <FaBox />
// }

// const TrackingInfo = ({ trackingData }) => {
//     if (!trackingData) {
//         return null;
//     }

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <div>
//                 <h2>Dados de rastreamento para: {trackingData.codigo}</h2>
//                 <a href={'https://rastreamento.correios.com.br/app/index.php'} target="_blank" rel="noopener noreferrer">
//                     <img
//                         src={logoCorreios}
//                         style={{ display: 'inline-block', margin: '5px', width: '100px', height: '50px' }}
//                         alt="Correios"
//                         title='Correios'
//                     />
//                 </a>
//                 {trackingData.eventos.map((evento, index) => {
//                     // Separa a origem e o destino a partir do array subStatus
//                     const [origem, destino] = evento.subStatus.map((sub) => sub.split(": ")[1]);

//                     return (
//                         <div key={index} style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}>
//                             <Box mb="4" fontSize="2xl">
//                                 {getIconForStatus(evento.status)} {/* Ícone correspondente ao status */}
//                                 {evento.status}
//                             </Box>
//                             <p><strong>Local:</strong> {evento.local}</p>
//                             <p><strong>Data:</strong> {evento.data} às {evento.hora}</p>
//                             <p><strong>Origem:</strong> {origem}</p>
//                             {destino && <p><strong>Destino:</strong> {destino}</p>}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default TrackingInfo;
