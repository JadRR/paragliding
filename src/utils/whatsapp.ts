
import { env } from "../config/env";

export function bookFlight(
  message = "Hello Thermique! I would like to enquire about a tandem paragliding flight in Lebanon."
): string {
  return `https://wa.me/${env.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
