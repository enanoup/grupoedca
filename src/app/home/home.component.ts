import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';
import swal from 'sweetalert2';
const $ = (window as any)['jQuery'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  windowHeight: any;
  windowWidth: any;

  contactForm1: any;
  contactForm2: any;
  workForm: any;

  nombre1: string;
  email1: string;
  whatsapp1: string;
  mensaje1: string;

  nombre2: string;
  email2: string;
  whatsapp2: string;
  mensaje2: string;

  workNombre: string;
  workEmail: string;
  workWhatsapp: string;
  workMensaje: string;

  modalElement: any = [];

  @ViewChild('home') home: ElementRef;
  @ViewChild('nosotros') nosotros: ElementRef;
  @ViewChild('servicios') servicios: ElementRef;
  @ViewChild('contacto') contacto: ElementRef;

  modals = [
    {
      id: 'modal-icon-1',
      title: 'Contabilidad y Finanzas',
      funcionalidades: ['Cobranza', 'Contabilidad', 'Administración de los ingresos y Egresos, Manejo del presupuesto',
      'Reportes Financieros siempre disponible en sistema', 'Administración de Documentos', 'Pago de Servicios', 'Compras'
      ],
    },
    {
      id: 'modal-icon-2',
      title: 'Asesoría Legal',
      funcionalidades: ['Departamento legal que vigila protocolos para formar la A.C. y sus reglamentos',
      'Registros, desarrollo de asambleas y protocolización', 'Manejo de controversias entre condóminos',
      'Análisis legal de contratos', 'Cobranza judicial y extrajudicial', 'Gestiones ante entidades gubernamentales'
      ],
    },
    {
      id: 'modal-icon-3',
      title: 'Operación y Mantenimiento',
      funcionalidades: ['Administrador y staff de planta en tu condominio', 'Amplio Back Office para la coordinación',
      'Operación y Supervisión de Mantenimiento, Intendencia y Vigilancia', 'Desarrollo de Procedimientos, Consignas, Roles de Actividades, Programas de Mantenimiento',
      'Análisis de necesidades y propuestas de mejoras', 'Inventario de activos', 'Seguros y Prevención de Riesgos'
      ],
    },
    {
      id: 'modal-icon-4',
      title: 'Capital Humano',
      funcionalidades: [
        'Selección, seguimiento y control de los proveedores más convenientes', 'Contratación, evaluación de proveedores',
        'Análisis técnico de contratos'
      ],
    }
  ];


  constructor( private formBuilder: FormBuilder, private mail: MailService) {
    // Para cargar la validacion del formulario
    this.contactForm1 = this.formBuilder.group({
      nombre: new FormControl(this.nombre1, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(this.email1, [Validators.required, Validators.email]),
      whatsapp: new FormControl(this.whatsapp1, [Validators.required]),
      mensaje: new FormControl(this.mensaje1, [Validators.required])
    });
    this.contactForm2 = this.formBuilder.group({
      nombre: new FormControl(this.nombre2, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(this.email2, [Validators.required, Validators.email]),
      whatsapp: new FormControl(this.whatsapp2, [Validators.required]),
      mensaje: new FormControl(this.mensaje2, [Validators.required])
    });
    this.workForm = this.formBuilder.group({
      nombre: new FormControl(this.workNombre, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(this.workEmail, [Validators.required, Validators.email]),
      whatsapp: new FormControl(this.workWhatsapp, [Validators.required]),
      mensaje: new FormControl(this.workMensaje, [Validators.required])
    });
  }



  formSubmit(contactData: any) {

    console.log('Enviando Formulario...');
    this.mail.sendGrupoEDCAForm(contactData.nombre, contactData.email,
      contactData.whatsapp, contactData.mensaje)
      .subscribe(() => {
        swal.fire(`Gracias ${ contactData.nombre }`,
        'Tu solicitud ha sido recibida, en breve nos pondremos en contacto contigo',
        'success').finally(() => {
          this.contactForm1.reset();
          this.contactForm2.reset();
          this.workForm.reset();
          console.log('Enviado');
        });
      });
  }

openModal( modal: string ) {
    $('.modal-content-funcion').removeClass('fadeOutUp').addClass('fadeInDown');
    this.modalElement = $('#modal-' + modal);
    this.modalElement.css('display', 'block');
  }

  closeModal() {
    $('.modal-content-funcion').removeClass('fadeInDown').addClass('fadeOutUp');
    setTimeout(() => {
      $('.modal-funcion').css('display', 'none');
    }, 200);
    }

  onClickButtons( opcion: string ) {
    this.recibeSeleccion( opcion);
  }

  recibeSeleccion( event: any ) {

    console.log('Recibe selección: ', event);

    switch (event) {
      case 'home':
        this.home.nativeElement.scrollIntoView({behavior: 'smooth'});
        break;
      case 'nosotros':
        this.nosotros.nativeElement.scrollIntoView({behavior: 'smooth'});
        break;
      case 'servicios':
        this.servicios.nativeElement.scrollIntoView({behavior: 'smooth'});
        break;
      case 'contacto':
        this.contacto.nativeElement.scrollIntoView({behavior: 'smooth'});
        break;

      default:
        break;
    }
  }

  loadCarrusel() {

      $('.fullscreen .flexslider').flexslider({
          animation: 'fade',
          directionNav: 'false',
          controlNav: 'thumbnails'
      });

      this.windowHeight = $(window).height();
      this.windowWidth = $(window).width();

      $('.flexslider-wrap .slides').each(function() {
          const h = $(this).height();
          const w = $(this).width();
          const ratA = w / h;
          const ratI = this.windowWidth / this.windowHeight;
          if (ratA > ratI) {
              const r = w / h;
              $(this).css('height', this.windowHeight);
              $(this).css('width', this.windowHeight * r);
              const m = ((this.windowHeight * r) - this.windowWidth) / 2;
              $(this).css('margin-left', -m);
              $(this).attr('rat', 1);
              $(this).attr('mar', m);
          } else {
              const r = h / w;
              $(this).css('width', this.windowWidth);
              $(this).css('height', this.windowWidth * r);
              const m = ((this.windowWidth * r) - this.windowHeight) / 2;
              $(this).css('margin-top', -m);
              $(this).attr('rat', 0);
              $(this).attr('mar', m);
          }
      });

      this.windowHeight = $(window).height();
      this.windowWidth = $(window).width();

      $('.fullscreen').css('height', this.windowHeight);

      $('.flexslider-wrap .slides li').css('height', window.innerHeight - 0);

      $('.gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
              tError: 'The image #%curr% could not be loaded.',

          }
      });

        /*-----------------------------------------------------------------------------------*/
        /*  Room Detail Slider
        /*-----------------------------------------------------------------------------------*/

      $('.room-slider .flexslider').flexslider({
            animation: 'fade',
            directionNav: 'true',
            controlNav: 'true'
        });
  }

  ngOnInit(): void {

     // Este código cierra el modal si haces click en cuakquier parte
     $(window).click((e: any) => {
      if ( e.target === this.modalElement[0]) {
        this.closeModal();
      }
    });
     this.loadCarrusel();

  }

}
