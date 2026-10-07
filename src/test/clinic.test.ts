import { describe, expect, it } from "vitest";
import { appointmentUrl, treatmentUrl, treatments } from "@/lib/clinic";

describe("Clinic appointments", () => {
  it("sends general bookings to the exact clinic WhatsApp destination", () => {
    expect(appointmentUrl).toBe("https://wa.me/5511985109481?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vital%20Bel.");
  });
  it.each(treatments)("includes $name in its own booking message", ({ name }) => {
    const url = new URL(treatmentUrl(name));
    expect(url.pathname).toBe("/5511985109481");
    expect(url.searchParams.get("text")).toBe(`Olá! Gostaria de saber mais sobre ${name} e agendar uma consulta na Vital Bel.`);
  });
});