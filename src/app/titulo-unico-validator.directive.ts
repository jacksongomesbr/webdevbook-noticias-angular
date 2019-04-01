import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { NoticiasManagerService } from './noticias-manager.service';

@Directive({
  selector: '[appTituloUnicoValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TituloUnicoValidatorDirective, multi: true }]
})
export class TituloUnicoValidatorDirective implements Validator {
  /**
   * O construtor da classe.
   * 
   * @param noticias Uma instância de NoticiasManagerService
   */
  constructor(private noticias: NoticiasManagerService) { }

  validate(control: AbstractControl): ValidationErrors {
    /** obtém o valor do controle (campo do formulário) */
    const value = control.value;

    /** utiliza o método Array.find() para encontrar uma notícia com o título 
     * igual ao valor do controle
     */
    const existe = this.noticias.lista().find(n => n.titulo === value);

    /** com base na existência da notícia, retorna um objeto com a estrutura
     * necessária para a validação ou null
     */
    return existe ? { 'tituloUnico': { value: value } } : null;
  }

}
