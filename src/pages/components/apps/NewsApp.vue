<template>
<div class="panel">
  <div class="box">
    <div class="box__header">
      Default Primary Card Header Title
    </div>
    <div class="box__body">
      <p class="box__text">
        Windows 95 sold for $89.99 as an upgrade or $179.99 for the full version.
      </p>
      <div class="actions">
        <button class="btn btn--sm btn--primary btn--border-dark" type="button">
          <span class="btn__text">OK</span>
        </button>
        <button class="btn btn--sm btn--primary" type="button">
          <span class="btn__text">Cancel</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<!-- Plain-CSS version of your card -->
<style>
  /* === Variables (tweak as you like) === */
  :root{
    --primary: #0d6efd;          /* Bootstrap 5 primary */
    --primary-hover:#0b5ed7;
    --border: rgba(0,0,0,.125);
    --header-bg: rgba(0,0,0,.03);
    --text: #212529;
    --white: #fff;
  }

  /* === What .col-12 .col-lg-6 .mb-4 .mb-lg-0 did ===
     - 100% width on small screens
     - 50% width at >= 992px
     - margin-bottom: 1.5rem on small screens
     - margin-bottom: 0 at >= 992px
  */
  .panel{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1.5rem; /* mb-4 = 1.5rem */
  }


  /* === What .card, .card-header, .card-body, .card-text did === */
  .box{
    border: 1px solid var(--border);
    border-radius: .25rem;
    background: var(--white);
    color: var(--text);
  }
  .box__header{
    padding: .5rem 1rem;                /* Bootstrapy header padding */
    background: var(--header-bg);
    border-bottom: 1px solid var(--border);
    font-weight: 600;
  }
  .box__body{
    padding: 1rem;                      /* typical .card-body */
  }
  .box__text{
    margin: 0 0 1rem 0;                 /* .card-text default spacing */
  }

  /* === What .d-flex .justify-content-end .mt-3 did === */
  .actions{
    display: flex;                      /* d-flex */
    justify-content: flex-end;          /* justify-content-end */
    margin-top: 1rem;                   /* mt-3 = 1rem */
  }

  /* === What .btn .btn-sm .btn-primary .border-dark .mr-2 did === */
  .btn{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  .btn--sm{
    padding: .25rem .5rem;              /* btn-sm */
    font-size: .875rem;
    border-radius: .2rem;
  }
  .btn--primary{
    background: var(--primary);         /* btn-primary */
    border-color: var(--primary);
    color: var(--white);
  }
  .btn--primary:hover{
    background: var(--primary-hover);
    border-color: var(--primary-hover);
  }
  .btn--border-dark{
    border-color: #212529;              /* border-dark */
  }
  /* replicate .mr-2 by spacing the first button to the right */
  .actions .btn:first-child{ margin-right: .5rem; } /* mr-2 = .5rem */
</style>
