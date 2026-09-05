require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);


// ==========================================
// TEST SUPABASE
// ==========================================

app.get("/test-supabase", async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("players")
            .select("*")
            .order("score", { ascending: false });

        if (error) {

            return res.status(500).json({
                success: false,
                error: error.message
            });

        }

        res.json({
            success: true,
            message: "Connessione a Supabase riuscita!",
            data: data || []
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});


// ==========================================
// OTTIENI CLASSIFICA
// ==========================================

app.get("/api/players", async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("players")
            .select("id, created_at, username, score")
            .order("score", { ascending: false })
            .order("created_at", { ascending: true });

        if (error) {

            return res.status(500).json({
                success: false,
                error: error.message
            });

        }

        res.json({
            success: true,
            players: data || []
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});


// ==========================================
// SALVA RISULTATO
// ==========================================

app.post("/api/players", async (req, res) => {

    try {

        const { username, score } = req.body;

        if (
            typeof username !== "string" ||
            !username.trim() ||
            typeof score !== "number"
        ) {

            return res.status(400).json({
                success: false,
                error: "Dati del risultato non validi."
            });

        }

        const safeScore = Math.max(
            0,
            Math.min(
                26,
                Math.floor(score)
            )
        );

        const { data, error } = await supabase
            .from("players")
            .insert({
                username: username.trim().slice(0, 20),
                score: safeScore
            })
            .select()
            .single();

        if (error) {

            return res.status(500).json({
                success: false,
                error: error.message
            });

        }

        res.json({
            success: true,
            message: "Risultato salvato!",
            data: data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});


// ==========================================
// CANCELLA CLASSIFICA
// ==========================================

app.delete("/api/players", async (req, res) => {

    try {

        const { password } = req.body;

        if (password !== process.env.ADMIN_PASSWORD) {

            return res.status(403).json({
                success: false,
                error: "Password admin non valida."
            });

        }

        const { error } = await supabase
            .from("players")
            .delete()
            .neq("id", 0);

        if (error) {

            return res.status(500).json({
                success: false,
                error: error.message
            });

        }

        res.json({
            success: true,
            message: "Classifica cancellata."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});


// ==========================================
// AVVIO SERVER
// ==========================================

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `Server avviato sulla porta ${PORT}`
    );

});