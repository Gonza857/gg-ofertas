import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const ofertasRef = collection(db, "ofertas");
    const response = await getDocs(ofertasRef);
    let ofertas = response.docs.map((o) => {
      return {
        ...o.data(),
        id: o.id,
      };
    });

    // Revalida las rutas
    revalidatePath("/");
    // Retorna los productos en formato JSON
    return NextResponse.json(ofertas);
  } catch (e) {
    console.error("Error fetching orders:", e);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
};
