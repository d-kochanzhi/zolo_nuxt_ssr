<template>
  <Navbar expand="lg" theme="dark" background-color="dark">
    <Container type="fluid">
      <NavbarBrand>
        <b-img
          src="/images/SolanaLogoMark.png"
          width="30"
          height="24"
          vertical-align="text-top"
          display="inline-block"
          class="mx-2" />
        3S
      </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto b-2 b-lg-0" justify-content="end">
          <NavItem>
            <NuxtLink to="/" class="nav-link" exact-active-class="active">
              {{$t('home.Home')}}
            </NuxtLink>
          </NavItem>
          <NavItem>
            <NuxtLink
              to="/services"
              class="nav-link"
              exact-active-class="active">
              {{$t('service.Services')}}
            </NuxtLink>
          </NavItem>
          <NavItem>
            <NuxtLink to="/about" class="nav-link" exact-active-class="active">
              {{$t('about.About')}}
            </NuxtLink>
          </NavItem>
          <NavItem>
            <NuxtLink
              to="/feedback"
              class="nav-link"
              exact-active-class="active">
              {{$t('feedback.Feedback')}}
            </NuxtLink>
          </NavItem>
          <NavItemDropdown  >
            <NavItemDropdownToggle>{{ $t('Language') }} {{  currentLocale }}</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem
                v-for="locale in localesList"
                :key="locale.code"
                @click="switchLocale(locale.code)">
                {{ locale.name }} [{{ locale.code }}]
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>

<script setup lang="ts">
import useLanguages from '../shared/useLanguages';

const { switchLocale, localesList, currentLocale } = useLanguages();


</script>