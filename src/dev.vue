<template>
  <div v-cloak id="app">
    <div class="h-screen bg-white">
      <div class="container mx-auto flex my-12">
        <div class="w-1/2">
          <h1 class="text-4xl text-gray-800 leading-snug">Profile</h1>
          <h2 class="text-lg text-gray-600">
            You can update your information here
          </h2>
          <div class="mt-12 max-w-sm">
            <R64Input
              v-model="profile.name"
              label="Name"
              :v="$v.profile.name"
              error-message="The name introduced is too short"
            />
            <R64Input
              v-model="profile.lastName"
              label="Last name"
              :v="$v.profile.lastName"
              error-message="Can't be blank"
            />
            <R64Select
              v-model="profile.country"
              :v="$v.profile.country"
              :options="countries"
              placeholder="Select country"
              label="Country/State"
              error-message="Must select a country"
            />
            <R64Input
              v-model="profile.email"
              :v="$v.profile.email"
              label="Email"
              placeholder="you@example.com"
              error-message="Must be a valid email address"
            />
            <R64Select
              v-model="profile.notifications"
              :options="schedule"
              label="Notifications schedule"
              :v="$v.profile.notifications"
              error-message="Can't be blank"
            />
            <R64Textarea
              v-model="profile.message"
              label="Message"
              :v="$v.profile.message"
              error-message="Can't be blank"
            />
            <R64Checkbox v-model="profile.comments" label="Comments" />
            <R64Checkbox v-model="profile.candidates" label="Candidates" />
            <div>
              <p class="mb-4">Get notified by sms</p>
              <div class="flex">
                <R64Radio
                  v-model="profile.sms"
                  name="sms"
                  :radio-value="true"
                  label="Yes"
                />
                <R64Radio
                  v-model="profile.sms"
                  name="sms"
                  class="ml-8"
                  :radio-value="false"
                  label="No"
                />
              </div>
            </div>
            <R64Checkbox
              v-model="profile.terms"
              label="Terms and conditions"
              :v="$v.profile.terms"
              error-message="Terms and conditions must be accepted"
            />
            <R64Collapse v-model="profile.collapse" header="Collapse">
                <div>
                    <p>Item One</p>
                    <p>Item Two</p>
                    <p>Item Three</p>
                </div>
            </R64Collapse>
          </div>
          <div class="max-w-sm flex justify-between mt-12">
            <R64Button outline>Back</R64Button>
            <R64Button :loading="loading" :disabled="$v.profile.$invalid">Submit</R64Button>
          </div>
        </div>
        <div class="w-1/2">
          <h1 class="text-4xl text-gray-800 leading-snug">Profile</h1>
          <h2 class="text-lg text-gray-600">
            You can update your information here
          </h2>
          <div class="mt-12 max-w-sm">
            <R64Input
              v-model="secondaryProfile.name"
              label="Name"
              :v="$v.secondaryProfile.name"
              error-message="The name introduced is too short"
              secondary
            />
            <R64Input
              v-model="secondaryProfile.lastName"
              label="Last name"
              :v="$v.secondaryProfile.lastName"
              error-message="Can't be blank"
              secondary
            />
            <R64Select
              v-model="secondaryProfile.country"
              :v="$v.secondaryProfile.country"
              :options="countries"
              placeholder="Select country"
              label="Country/State"
              error-message="Must select a country"
              secondary
            />
            <R64Input
              v-model="secondaryProfile.email"
              :v="$v.secondaryProfile.email"
              label="Email"
              placeholder="you@example.com"
              error-message="Must be a valid email address"
              secondary
            />
            <R64Select
              v-model="secondaryProfile.notifications"
              :options="schedule"
              label="Notifications schedule"
              :v="$v.secondaryProfile.notifications"
              error-message="Can't be blank"
              secondary
            />
            <R64Textarea
              v-model="secondaryProfile.message"
              label="Message"
              :v="$v.secondaryProfile.message"
              error-message="Can't be blank"
              secondary
            />
            <R64Checkbox
              v-model="secondaryProfile.comments"
              label="Comments"
              secondary
            />
            <R64Checkbox
              v-model="secondaryProfile.candidates"
              label="Candidates"
              secondary
            />
            <div>
              <p class="mb-4">Get notified by sms</p>
              <div class="flex">
                <R64Radio
                  v-model="secondaryProfile.sms"
                  name="sms"
                  :radio-value="true"
                  label="Yes"
                  secondary
                />
                <R64Radio
                  v-model="secondaryProfile.sms"
                  name="sms"
                  class="ml-8"
                  :radio-value="false"
                  label="No"
                  secondary
                />
              </div>
            </div>
            <R64Checkbox
              v-model="secondaryProfile.terms"
              label="Terms and conditions"
              :v="$v.secondaryProfile.terms"
              error-message="Terms and conditions must be accepted"
              secondary
            />
            <R64Collapse secondary v-model="secondaryProfile.collapse" header="Collapse">
                <div class="bg-indigo-500">
                    <p>Item One</p>
                    <p>Item Two</p>
                    <p>Item Three</p>
                </div>
            </R64Collapse>
          </div>
          <div class="max-w-sm flex justify-between mt-12">
            <R64Button outline secondary>Back</R64Button>
            <R64Button
              :disabled="$v.secondaryProfile.$invalid"
              secondary
              :loading="loading"
            >
              Submit
            </R64Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import R64Button from '@/components/R64Button.vue'
import R64Input from '@/components/R64Input.vue'
import R64Select from '@/components/R64Select.vue'
import R64Checkbox from '@/components/R64Checkbox.vue'
import R64Radio from '@/components/R64Radio.vue'
import R64Textarea from '@/components/R64Textarea.vue'
import R64Collapse from '@/components/R64Collapse.vue'

export default {
  name: 'App',

  components: {
    R64Button,
    R64Input,
    R64Select,
    R64Checkbox,
    R64Radio,
    R64Textarea,
    R64Collapse
  },

  data() {
    return {
      profile: {
        name: '',
        lastName: '',
        country: '',
        email: '',
        message: '',
        notifications: 'weekly',
        comments: false,
        candidates: true,
        sms: false,
        terms: false,
        collapse: false
      },
      secondaryProfile: {
        name: '',
        lastName: '',
        country: '',
        email: '',
        message: '',
        notifications: 'weekly',
        comments: false,
        candidates: true,
        sms: false,
        terms: false,
        collapse: false
      },
      loading: false,
    }
  },

  computed: {
    countries() {
      return [
        { value: 'spain', label: 'Spain' },
        { value: 'us', label: 'United States' },
        { value: 'morocco', label: 'Morocco' },
        { value: 'slovakia', label: 'Slovakia' },
        { value: 'ghana', label: 'Ghana' },
        { value: 'brazil', label: 'Brazil' }
      ]
    },

    schedule() {
      return [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Montly' }
      ]
    }
  },

  validations: {
    profile: {
      name: {
        required,
        minLength: minLength(4)
      },
      lastName: { required },
      country: { required },
      email: { email },
      message: { required },
      schedule: { required },
      terms: { checked: (value) => !!value }
    },
    secondaryProfile: {
      name: {
        required,
        minLength: minLength(4)
      },
      lastName: { required },
      country: { required },
      email: { email },
      message: { required },
      schedule: { required },
      terms: { checked: (value) => !!value }
    }
  },

  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000);
  },
}
</script>
<style>
@import 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css';
</style>
