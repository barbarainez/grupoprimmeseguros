
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-s_kul-WKY7WfzMxt264E9Dvai6Mpn1rOL_KPRVbl5l48l_b2UIcKs6vqb0xxlU-hpA/exec";

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
