module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        'primary-foreground':
          'hsl(var(--color-primary-foreground) / <alpha-value>)',
        'primary-light': 'hsl(var(--color-primary-light) / <alpha-value>)',
        'primary-dark': 'hsl(var(--color-primary-dark) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--color-card-foreground) / <alpha-value>)',
        popover: 'hsl(var(--color-popover) / <alpha-value>)',
        'popover-foreground':
          'hsl(var(--color-popover-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        'secondary-foreground':
          'hsl(var(--color-secondary-foreground) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        'muted-foreground':
          'hsl(var(--color-muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-foreground':
          'hsl(var(--color-accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--color-destructive) / <alpha-value>)',
        'destructive-foreground':
          'hsl(var(--color-destructive-foreground) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        input: 'hsl(var(--color-input) / <alpha-value>)',
        ring: 'hsl(var(--color-ring) / <alpha-value>)',
        'sidebar-background':
          'hsl(var(--color-sidebar-background) / <alpha-value>)',
        'sidebar-foreground':
          'hsl(var(--color-sidebar-foreground) / <alpha-value>)',
        'sidebar-primary': 'hsl(var(--color-sidebar-primary) / <alpha-value>)',
        'sidebar-primary-foreground':
          'hsl(var(--color-sidebar-primary-foreground) / <alpha-value>)',
        'sidebar-accent': 'hsl(var(--color-sidebar-accent) / <alpha-value>)',
        'sidebar-accent-foreground':
          'hsl(var(--color-sidebar-accent-foreground) / <alpha-value>)',
        'sidebar-border': 'hsl(var(--color-sidebar-border) / <alpha-value>)',
        'sidebar-ring': 'hsl(var(--color-sidebar-ring) / <alpha-value>)',
      },
      fontFamily: {
        heading: 'var(--font-family-heading)',
        body: 'var(--font-family-body)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  safelist: [
    'text-primary',
    'text-primary-foreground',
    'text-secondary',
    'text-secondary-foreground',
    'text-muted',
    'text-muted-foreground',
    'text-accent',
    'text-accent-foreground',
    'text-destructive',
    'text-destructive-foreground',
    'bg-primary',
    'bg-primary-foreground',
    'bg-secondary',
    'bg-secondary-foreground',
    'bg-muted',
    'bg-muted-foreground',
    'border-primary',
    'border-secondary',
    'hover:text-primary',
    'hover:bg-primary',
    'hover:border-primary',
    'group-hover:text-primary',
    'group-hover:bg-primary',
    'group-hover:border-primary',
  ],
}
