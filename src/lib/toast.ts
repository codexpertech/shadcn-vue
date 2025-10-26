import Label from '@/components/ui/label/Label.vue'
import { XCircle, AlertCircle, CheckCircle, Info, X } from 'lucide-vue-next'
import { toast, type ToasterProps } from 'vue-sonner'

// Configuración personalizada de iconos
export const toastConfig: Partial<ToasterProps> = {
  icons: {
    error: XCircle,
    warning: AlertCircle,
    success: CheckCircle,
    info: Info,
    close: X // Añadir icono de cierre
  },
  position: 'top-right',
  richColors: true,
  expand: true,
  closeButton: true, // Habilitar botón de cierre
  duration: 1000, // Duración predeterminada de 1 segundo
  expand: true, // Permitir mostrar toasts apilados
  visibleToasts: 10 // Número máximo de toasts visibles al mismo tiempo 
}

// Helper functions para usar la configuración personalizada
export const customToast = {
  error: (message: string, options = {}) => toast.error(message, { ...options, dismissible: true }),
  success: (message: string, options = {}) => toast.success(message, { ...options, dismissible: true }),
  warning: (message: string, options = {}) => toast.warning(message, { ...options, dismissible: true }),
  info: (message: string, options = {}) => toast.info(message, { ...options, dismissible: true })
}