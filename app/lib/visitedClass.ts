"use client";
export default class VisitedClass {
    static async setVisited({ idPlace, email }: { idPlace: number, email: string }) {
        const data = await fetch(`/api/visited`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, idPlace }),
        });

        return data.json();
    }

    static async setNotVisited({ idPlace, email }: { idPlace: number, email: string }) {
        try {
            const data = await fetch(`/api/visited`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, idPlace }),
            });

            return data.json();
        } catch (error) {
            console.error(error);
            return false;
        }

    }
}