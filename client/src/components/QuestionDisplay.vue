<template>
    <div>
        <h1>Question Display</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions: {
        // Initialize with default values or leave empty, depending on your use case
      }
    };
  },
  methods: {
    submitQuestions() {
      axios.post('http://localhost:8756/generate-readme', this.questions)
        .then(response => {
          // Handle the response from the server (this will be the generated README file)
        })
        .catch(error => {
          // Handle errors
        });
    }
  }
}
</script>
