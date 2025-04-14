import { Display1 } from "@sainsburys-tech/fable";
import { UselessProvider } from "./provider";
import ClientsideButton from "./ClientsideButton";
import AmbiguousComponent from "./AmbiguousComponent";


// server comps
// process.env

// ---------------- // There are components that need neither

// client comps
// window, document

export default function Home() {
  return (
    <UselessProvider>
      <h1> sup</h1>

      <ClientsideButton />

      <AmbiguousComponent />
    </UselessProvider>
  )
}