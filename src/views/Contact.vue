<template>
  <Map/>
  <div class="contact_information">
    <div class="container max-w-9xl mx-auto py-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full min-w-0 mb-8">
        <div class="flex flex-col flex-auto p-6 bg-gray-50 shadow rounded-sm overflow-hidden item"
             v-for="i in 3">
          <h5>Visit Our Office <span>(Los Angeles)</span></h5>
          <ul>
            <li>
              City: <span> 234, Triumph Street</span>
            </li>
            <li>
              Country: <span> Los Angeles, California City</span>
            </li>
            <li>
              Street: <span> United States - 90005</span>
            </li>
          </ul>
          <div class="icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
        </div>
      </div>
      <div class="border-b"></div>
      <div class="mx-auto w-11/12 md:w-3/4 lg:w-full">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="grid lg:grid-cols-2 gap-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Adınız
              </label>
              <input
                  class="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ff6000]"
                  id="name" type="text" placeholder="John Doe">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Soyadınız
              </label>
              <input
                  class="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ff6000]"
                  id="email" type="email" placeholder="johndoe@example.com">
            </div>
          </div>
          <div class="grid lg:grid-cols-2 gap-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                E-mail Adresi
              </label>
              <input
                  class="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ff6000]"
                  id="name" type="text" placeholder="John Doe">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Telefon
              </label>
              <input
                  class="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ff6000]"
                  id="email" type="email" placeholder="johndoe@example.com">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Mesajınız
            </label>
            <textarea
                class="appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#ff6000]"
                id="message" placeholder="Enter your message here"></textarea>
          </div>
          <div class="flex items-center justify-start">
            <button
                class="bg-[#ff6000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  name: "Contact",
  components: {Map}
}
</script>

<style lang="scss">
.contact_information {
  .item {
    position: relative;
    margin-top: 50px;
    padding: 30px;

    h5 {
      color: #222;
      font-size: 16px;
      font-weight: 600;
      padding-bottom: 17px;

      span {
        color: #ff6000;
        font-style: italic;
      }
    }

    ul {
      li {
        color: #ff6000;
        font-size: 14px;
        margin: 6px 0;

        span {
          color: #848484;
        }
      }
    }

    .icon {
      position: absolute;
      color: #ececec;
      font-size: 100px;
      right: 0;
      bottom: -35px;
    }
  }
}
</style>