<script setup lang="ts">
import type { Player } from "~/types/player";

const players = ref<Player[]>([
  {
    name: "a",
    ranking: "a",
    average: 1,
    license: "a",
    league: "a",
    association: "a",
    ageCategory: "a",
  },
  {
    name: "b",
    ranking: "b",
    average: 2,
    license: "b",
    league: "b",
    association: "b",
    ageCategory: "b",
  },
  {
    name: "a",
    ranking: "a",
    average: 3,
    license: "a",
    league: "a",
    association: "a",
    ageCategory: "a",
  },
]);

const columns: { field: keyof Player; header: string }[] = [
  { field: "name", header: "Nom" },
  { field: "ranking", header: "CLT" },
  { field: "average", header: "RG" },
  { field: "license", header: "License" },
  { field: "league", header: "Ligue" },
  { field: "association", header: "Association" },
  { field: "ageCategory", header: "Catégorie" },
];
</script>

<template>
  <DataTable
    :value="players"
    paginator
    :rows="2"
    :rowsPerPageOptions="[2, 5, 10, 20, 50]"
    striped-rows
    class="p-8"
  >
    <template #header>
      <div class="flex justify-center text-2xl mb-4 mt-4">
        Consulter le classement
      </div>
    </template>
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    />
  </DataTable>
</template>
