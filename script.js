// script.js
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const eventosEmpreendedorismo = [
    { nome: "Startup Weekend", data: "10/05/2025", local: "Centro de Convenções de São Paulo" },
    { nome: "Conferência de Empreendedorismo Digital", data: "15/05/2025", local: "Expo Center" },
    { nome: "Workshop de Inovação e Negócios", data: "20/05/2025", local: "Universidade XYZ" },
    { nome: "Feira de Startups", data: "25/05/2025", local: "Pavilhão de Eventos - Rio de Janeiro" },
    { nome: "Empreender para Crescer", data: "30/05/2025", local: "Auditório A - Porto Alegre" }
];

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Exibir a mensagem do usuário no chat
    displayMessage(userMessage, "user");

    // Limpar o campo de entrada
    userInput.value = "";

    // Gerar a resposta do chatbot
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, "bot");
    }, 1000);
}

function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase();

    // Respostas básicas sobre eventos de empreendedorismo
    if (normalizedMessage.includes("eventos") || normalizedMessage.includes("empreendedorismo")) {
        return "Aqui estão os próximos eventos de empreendedorismo:\n" + eventosEmpreendedorismo.map(evento => `${evento.nome} - ${evento.data} em ${evento.local}`).join("\n");
    } else if (normalizedMessage.includes("inscrição") || normalizedMessage.includes("como se inscrever")) {
        return "Para se inscrever, por favor, visite nosso site ou entre em contato com nossa equipe.";
    } else if (normalizedMessage.includes("onde")) {
        return "Eu posso te ajudar com a localização dos eventos. Pergunte sobre os detalhes de um evento específico.";
    } else {
        return "Desculpe, não entendi. Pergunte sobre eventos de empreendedorismo ou como se inscrever.";
    }
}
