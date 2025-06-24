import { Link } from 'react-router';

type RouterLinkProps = {
  children: React.ReactNode;  // O conteúdo que vai dentro do link (ex: o texto)
  href: string;               // O destino do link (pra onde vai ao clicar)
} & React.ComponentProps<'a'>;  // Aceita também todas as outras props típicas de uma <a>, tipo className, style, etc


export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return <Link to={href} {...props}>{children}</Link>;
}
