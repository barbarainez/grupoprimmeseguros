
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznYLe8Xoph5YSErn7ZWnZNmQz94m4jjL2uesZ4CPnurzxDfYrXv1EZiPk92pdaMpFh/exec";

export async function editarLead({ id, status, responsavel }) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ id, status, responsavel }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await response.json();
    return resultado;
  } catch (error) {
    console.error("Erro ao editar lead:", error);
    return { status: "erro", mensagem: error.message };
  }
}
