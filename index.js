import dotenv from "dotenv";
import { Markup, Telegraf } from "telegraf";
import { projects } from "./projects.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// --- Step 1: Start Command ---
bot.start((ctx) =>
{
    const buttons = projects.map((p) => [
        Markup.button.callback(p.groupName, `group_${p.id}`),
    ]);

    ctx.reply(
        "👋 Welcome! Please select your group below:",
        Markup.inlineKeyboard(buttons)
    );
});

// --- Step 2: Handle Group Selection ---
projects.forEach((project) =>
{
    bot.action(`group_${project.id}`, async (ctx) =>
    {
        // safe answerCbQuery
        try { await ctx.answerCbQuery(); } catch (e) { }

        const info = `
📘 *${project.title}*
👥 *${project.groupName}*
━━━━━━━━━━━━━━━
👨‍🎓 *Members:*
${project.students.map((s) => `- ${s}`).join("\n")}

📝 *Description:*
${project.description}

📋 *Requirements:*
${project.requirements.map((r) => `- ${r}`).join("\n")}
`;

        await ctx.replyWithMarkdown(info, Markup.inlineKeyboard([
            [Markup.button.callback("⬅️ Back to Groups", "back_to_groups")]
        ]));
    });
});

// --- Step 3: Back button handler ---
bot.action("back_to_groups", async (ctx) =>
{
    try { await ctx.answerCbQuery(); } catch (e) { }

    const buttons = projects.map((p) => [
        Markup.button.callback(p.groupName, `group_${p.id}`),
    ]);

    await ctx.editMessageText(
        "👋 Please select your group below:",
        Markup.inlineKeyboard(buttons)
    );
});

// --- Step 4: Launch bot ---
bot.launch()
    .then(() => console.log("🚀 Bot is running..."))
    .catch(err => console.error("Failed to launch bot:", err));
