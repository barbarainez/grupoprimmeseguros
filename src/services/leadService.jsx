const GAS_URL = 'https://script.google.com/macros/s/AKfycbzu_63896E6y5415ZdEG6-4DX1E69hvIkHQ-PllKg7jCbvlBM5T04ozKN7vTTwB1D0Icg/exec';

export async function atualizarLead(id, status, responsavel) {
  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify({ id, status, responsavel }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao atualizar lead:', error);
    return { status: 'erro', mensagem: error.message };
  }
}
