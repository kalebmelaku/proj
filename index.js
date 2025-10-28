import { Markup, Telegraf } from "telegraf";
import { projects } from "./projects.js";

const bot = new Telegraf("8435873367:AAFrJ2OB4Au34sexpjXIhng_bAZ8kMSAPAM"); // Replace with your bot token


// Step 1. Start Command
bot.start((ctx) => {
  const buttons = projects.map((p) => [
    Markup.button.callback(p.groupName, `group_${p.id}`),
  ]);

  ctx.reply(
    "👋 Welcome! Please select your group below:",
    Markup.inlineKeyboard(buttons)
  );
});

// Step 2. Handle Group Selection
projects.forEach((project) => {
  bot.action(`group_${project.id}`, async (ctx) => {
    await ctx.answerCbQuery();

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

// Step 3. Back button handler
bot.action("back_to_groups", async (ctx) => {
  await ctx.answerCbQuery();
  const buttons = projects.map((p) => [
    Markup.button.callback(p.groupName, `group_${p.id}`),
  ]);
  await ctx.editMessageText(
    "👋 Please select your group below:",
    Markup.inlineKeyboard(buttons)
  );
});

// Step 4. Launch bot
bot.launch();

console.log("🚀 Bot is running...");
