<template>
  <div class="flex flex-col h-screen">
    <Board style="min-height: 60%;" />
    <Keyboard />
    <div class="flex flex-col w-screen px-4 pt-4 pb-8">
      <div class="grid grid-cols-4 gap-2 text-center grow content-stretch">
        <button>
          <IconsHome />
          Start
        </button>
        <button>
          <IconsTrophy />
          Topplistan
        </button>
        <button>
          <IconsQuestion />
          Instruktioner
        </button>
        <button>
          <IconsUser />
          Min profil
        </button>
      </div>
    </div>
  </div>
</template>
