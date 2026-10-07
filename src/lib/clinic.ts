export const appointmentUrl = "https://wa.me/5511985109481?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vital%20Bel.";

export function treatmentUrl(name: string) {
  return `https://wa.me/5511985109481?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${name} e agendar uma consulta na Vital Bel.`)}`;
}

// Presentation suggestions from the clinic brief; confirm before publication.
export const treatments = [
  { name: "Estética Facial", description: "Cuidados personalizados para a beleza e o bem-estar da sua pele.", image: "facial" },
  { name: "Limpeza de Pele", description: "Um cuidado dedicado à higienização e ao aspecto saudável da pele.", image: "facial" },
  { name: "Rejuvenescimento Facial", description: "Conheça opções de cuidados para uma aparência renovada e harmoniosa.", image: "hero" },
  { name: "Estética Corporal", description: "Cuidados estéticos voltados ao corpo, respeitando seus objetivos individuais.", image: "body" },
  { name: "Hidratação e Cuidados com a Pele", description: "Momentos de atenção especial ao conforto e à hidratação da pele.", image: "skincare" },
  { name: "Avaliação Personalizada", description: "Um momento para entender suas necessidades e conhecer as opções disponíveis.", image: "consultation" },
] as const;