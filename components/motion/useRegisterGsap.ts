import { gsap } from "@/lib/gsap";

let registered = false;

export function useRegisterGsap() {
  if (!registered) {
    registered = true;
  }

  return gsap;
}
