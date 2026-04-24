export const testimonialsFr = [
  {
    id: 1,
    name: "Camille R.",
    role: "Kitesurf (intermédiaire)",
    text: "Super expérience : coach très pédagogue, spots choisis au bon moment et ambiance à bord au top. En 5 jours j’ai débloqué mes transitions et gagné en confiance.",
    photo: "/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Marion M.",
    role: "Wingfoil (débutant)",
    text: "Je partais de zéro en wing : matériel adapté, briefings clairs, retours vidéo… La progression est rapide et on navigue beaucoup. Le format croisière est juste parfait.",
    photo: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Greg T.",
    role: "Kite & Wing",
    text: "Entre les sessions, les navigations et la vie sur le catamaran, tout est fluide. Chaque jour un nouveau spot, et un coaching vraiment personnalisé. Je recommande à 100%.",
    photo: "/images/avatar3.jpg",
  },
];

export const testimonialsEn = [
  {
    id: 1,
    name: "Camille R.",
    role: "Kitesurf (intermediate)",
    text: "Amazing experience: super clear coaching, the right spot at the right time, and a great vibe on board. In 5 days I unlocked my transitions and gained confidence.",
    photo: "/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Marion M.",
    role: "Wingfoil (beginner)",
    text: "I started wingfoil from zero: the right gear, clear briefings, video feedback… Progress is fast and you ride a lot. The cruise format is simply perfect.",
    photo: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Greg T.",
    role: "Kite & Wing",
    text: "Between sessions, sailing and life on the catamaran, everything flows. A new spot every day and truly personalized coaching. 100% recommended.",
    photo: "/images/avatar3.jpg",
  },
];

export const testimonialsEs = [
  {
    id: 1,
    name: "Camille R.",
    role: "Kitesurf (intermedio)",
    text: "Experiencia increíble: coaching muy claro, el spot adecuado en el momento perfecto y un ambiente genial a bordo. En 5 días desbloqueé mis transiciones y gané confianza.",
    photo: "/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Marion M.",
    role: "Wingfoil (principiante)",
    text: "Empecé wingfoil desde cero: el material adecuado, briefings claros, feedback en vídeo… La progresión es rápida y navegas mucho. El formato crucero es simplemente perfecto.",
    photo: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Greg T.",
    role: "Kite y Wing",
    text: "Entre las sesiones, la navegación y la vida en el catamarán, todo fluye. Un spot nuevo cada día y un coaching realmente personalizado. Recomendado al 100%.",
    photo: "/images/avatar3.jpg",
  },
];

export function getTestimonials(locale) {
  if (locale === "en") return testimonialsEn;
  if (locale === "es") return testimonialsEs;
  return testimonialsFr;
}
