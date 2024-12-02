<script lang="ts">
  import Button from "$components/Button.svelte";
  import SectionHeadline from "$components/SectionHeadline.svelte";

  // Form state
  let contactName = $state("");
  let contactEmail = $state("");
  let contactMessage = $state("");
  let isFormInvalid = $state(false);
  let formStatus = $state("");
  let showSpinner = $state(false);
  // Form submission
  async function onSubmit(event: Event) {
    event.preventDefault();
    showSpinner = true;

    if (contactName && contactEmail && contactMessage) {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({ contactName, contactEmail, contactMessage }),
      });
      if (response.ok) {
        resetForm();
        formStatus =
          "Thank you for contacting me - I will get back in touch within 24 hours";
        showSpinner = false;
      }
    } else {
      isFormInvalid = true;
      formStatus = "Message failed to send - please try again";
      showSpinner = false;
    }
  }

  function resetForm() {
    contactName = "";
    contactEmail = "";
    contactMessage = "";
    isFormInvalid = false;
  }
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Let's Talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    <form class="form">
      <input
        class="mb-s text-input"
        class:input-error={isFormInvalid && !Boolean(contactName.length)}
        type="text"
        placeholder="Your Name"
        bind:value={contactName}
      />
      <input
        class="mb-s text-input"
        class:input-error={isFormInvalid && !Boolean(contactEmail.length)}
        type="email"
        placeholder="Your Email"
        bind:value={contactEmail}
      />
      <textarea
        class="mb-s text-input"
        class:input-error={isFormInvalid && !Boolean(contactMessage.length)}
        placeholder="Your Message"
        bind:value={contactMessage}
      ></textarea>
      <Button onclick={onSubmit}>
        {#if showSpinner}
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
        {:else}
          Submit
        {/if}
      </Button>
      {#if formStatus !== ""}
        <p class="form-status">{formStatus}</p>
      {/if}
    </form>
    <div class="form-text">
      <h3>Talk to me about your project</h3>
      <p>
        I'm always looking for new opportunities to work on exciting projects.
        Whether you have a project in mind or just want to say hi, I'd love to
        hear from you.
      </p>
    </div>
  </div>
</section>

<style>
  section {
    padding-bottom: 140px;
  }

  .form-container {
    display: flex;
    justify-content: space-between;
  }

  .form-text {
    width: 39%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
  }

  form * {
    font-size: 20px;
    font-family: "Inter Tight", sans-serif;
    font-weight: 500;
    color: black;
  }

  textarea,
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.035);
    border-radius: 8px;
    padding: 4px 12px;
    outline: none;
    border: none;
  }

  input {
    height: 48px;
  }

  textarea {
    height: 120px;
    margin-bottom: 40px;
  }

  textarea::placeholder,
  input::placeholder {
    font-size: 20px;
    font-weight: 400;
  }

  .input-error {
    background-color: rgba(223, 87, 87, 0.667);
  }

  .input-error::placeholder {
    color: white;
  }

  .form-status {
    color: gray;
    font-size: 20px;
    font-weight: 400;
    margin-top: 16px;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: white;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    display: flex;
  }
</style>
