<template>
  <div class="max-w-5xl w-full mx-auto px-6">
    <!-- hero -->
    <header class="relative mb-12 rounded-2xl overflow-hidden">
      <img
        src="https://pbs.twimg.com/media/G0v1djTWQAAIzUk?format=jpg&name=4096x4096"
        alt="Header Background"
        class="absolute inset-0 w-full h-full object-cover -z-10 blur-[3px] shadow-lg brightness-50"
        draggable="false"
      />

      <div class="relative py-16 px-8 text-center">
        <div class="flex flex-col items-center">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/85416153?v=4"
            size="3xl"
          />
          <UTooltip text="UTC +3" class="mt-4">
            <UBadge color="info" variant="soft" icon="mdi:clock">
              {{ getZoneStr }}
            </UBadge>
          </UTooltip>
        </div>

        <h1 class="text-6xl font-mono font-bold text-white tracking-tight mb-6">
          arshx86
        </h1>

        <p
          class="text-lg text-muted leading-relaxed max-w-3xl mx-auto mb-8 backdrop-blur-xs p-2 rounded-xl"
        >
          19 yo dev from Turkey. Developing full-stack web apps, primary with
          <NuxtLink to="https://nuxt.com">Nuxt</NuxtLink> &
          <NuxtLink to="https://typescriptlang.org">TypeScript</NuxtLink>.
          Highly interested in <b>cryptography</b>, <b>web3</b> and
          <b>E2EE</b> project developments. <br />
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            v-for="link in socialLinks"
            :key="link.label"
            :to="link.url"
            :icon="link.icon"
            color="error"
            variant="subtle"
            class="!rounded-full bg-white/10 hover:bg-white/20 transition-colors px-12"
            size="lg"
          >
            {{ link.label }}
          </UButton>
        </div>
      </div>
    </header>

    <!-- Stack Section -->
    <header
      class="relative mb-12 rounded-xl overflow-hidden border border-muted"
    >
      <img
        src="https://pbs.twimg.com/media/G2q3U0eWAAAiQeN?format=jpg&name=large"
        alt="Stack Background"
        class="absolute inset-0 w-full h-full object-cover -z-10 brightness-25"
        draggable="false"
      />
      <div class="relative py-12 px-8 text-right">
        <h2 class="text-5xl font-semibold text-amber-600 tracking-tight mb-4">
          skills
        </h2>
        <p class="text-lg text-highlighted font-mono mb-6">
          technologies i use for development
        </p>

        <div class="max-w-xl ml-auto">
          <div class="flex flex-wrap gap-3 justify-end">
            <UBadge
              v-for="skill in skills"
              :key="skill.label"
              variant="subtle"
              size="xl"
              class="px-4"
              color="primary"
              :icon="skill.icon"
            >
              {{ skill.label }}
            </UBadge>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

const getZoneStr = computed(() => {
  const turkeyZone = dayjs.tz(dayjs(), "Europe/Istanbul");
  const localZone = dayjs();

  const diffHours = turkeyZone.diff(localZone, "hour");

  if (diffHours === 0) {
    return `${turkeyZone.format("HH:mm A")} - same as you`;
  } else {
    return `${turkeyZone.format("HH:mm A")} (UTC ) - ${Math.abs(diffHours)}h ${
      diffHours > 0 ? "behind you" : "ahead of you"
    }`;
  }
});

const socialLinks = [
  {
    label: "Github",
    url: "https://github.com/arshx86",
    icon: "i-lucide-github",
  },
  { label: "Telegram", url: "https://t.me/arshx64", icon: "mdi:telegram" },
  {
    label: "Email",
    url: "mailto:arshx86@protonmail.com",
    icon: "i-lucide-mail",
  },
];
const skills = [
  {
    label: "Nuxt.js",
    icon: "logos:nuxt-icon",
  },
  {
    label: "Vue.js",
    icon: "logos:vue",
  },
  {
    label: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    label: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    label: "Prisma",
    icon: "logos:prisma",
  },
  {
    label: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    label: "Bun",
    icon: "logos:bun",
  },
];

interface GHRepo {
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  pushed_at: string;
}
const { data: repos } = await useFetch<GHRepo[]>(
  "https://api.github.com/users/arshx86/repos",
  {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    params: {
      sort: "pushed",
      per_page: 6,
    },
    server: false,
  }
);
</script>

<style scoped>
a {
  color: rgb(147, 197, 253);
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: 500;
}

a:hover {
  color: rgb(186, 230, 253);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
