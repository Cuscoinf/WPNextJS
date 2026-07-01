<?php
/**
 * Call to Action Section Component - Modern Travel Agency
 * Unified Bootstrap Version
 */

// Section settings from ACF or defaults
$cta_type = 'default';

// Textos traducibles
if (ICL_LANGUAGE_CODE == 'en') {
    $section_title = 'Ready for the Trip of a Lifetime to Peru?';
    $section_description = 'Start planning your adventure today with our expert help and personalized tours.';
    $selecciona_tours = 'Select your favorite tours (maximum 3)';
    $elige_hasta_3 = 'Choose up to 3 tours of interest';
    $categoria_hotel = 'Hotel category';
    $seleccione_uno_mas = 'Select one or more';
    $lujo = 'Luxury';
    $superior = 'Superior';
    $mejor_valor = 'Best value';
    $opcional_puedes_elegir = '(OPTIONAL. You can choose more than one)';
    $numero_viajeros = 'Number of travelers';
    $seleccione_uno = 'Select one';
    $duracion_viaje = 'Trip duration';
    $selecciona_rango_fechas = 'Select date range';
    $informacion_contacto = 'Contact information';
    $nombre_completo = 'Full name';
    $selecciona_nacionalidad = 'Select your nationality';
    $telefono = 'Phone';
    $correo_electronico = 'Email';
    $preguntas_placeholder = 'What can we do for you? We have everything. Just ask us!';
    $enviar = 'Send';
    $enviando = 'Sending...';
    $despues_click_enviar = 'AFTER CLICKING "SEND"';
    $que_pasa_despues = 'What happens next?';
    $descripcion_proceso = 'We will take care of the rest: this is how your request becomes a personalized trip.';
    $paso1_titulo = 'Send your travel request';
    $paso1_desc = 'Share your dates, destinations and travel style in the form.';
    $paso2_titulo = 'We receive your request';
    $paso2_desc = 'Our team registers your request and assigns you a travel advisor.';
    $paso3_titulo = 'Your advisor prepares your quote';
    $paso3_desc = 'A trip designer prepares a personalized itinerary and sends it to your email shortly.';
    $necesitas_ayuda = 'Need immediate help?';
    $chatea_con_nosotros = 'Chat with us';
    $selecciona_fin_tour = '(Select tour end)';
    $limpiar = 'Clear';
    $cerrar = 'Close';
    $exito = 'Success!';
    $error = 'Error';
    $solicitud_enviada = 'Request sent successfully!';
    $error_solicitud = 'Error sending request';
} else {
    $section_title = '¿Listos para el Viaje de su Vida a Perú?';
    $section_description = 'Comience a planear su aventura hoy mismo con nuestra ayuda experta y tours personalizados.';
    $selecciona_tours = 'Selecciona tus tours favoritos (máximo 3)';
    $elige_hasta_3 = 'Elige hasta 3 tours de interés';
    $categoria_hotel = 'Categoría de hotel';
    $seleccione_uno_mas = 'Seleccione uno o más';
    $lujo = 'Lujo';
    $superior = 'Superior';
    $mejor_valor = 'Mejor valor';
    $opcional_puedes_elegir = '(OPCIONAL. Puedes elegir más de uno)';
    $numero_viajeros = 'Número de viajeros';
    $seleccione_uno = 'Seleccione uno';
    $duracion_viaje = 'Duración del viaje';
    $selecciona_rango_fechas = 'Selecciona rango de fechas';
    $informacion_contacto = 'Información del contacto';
    $nombre_completo = 'Nombre completo';
    $selecciona_nacionalidad = 'Selecciona tu nacionalidad';
    $telefono = 'Teléfono';
    $correo_electronico = 'Correo electrónico';
    $preguntas_placeholder = '¿Qué podemos hacer por ti? Lo tenemos todo. ¡Solo pregúntanos!';
    $enviar = 'Enviar';
    $enviando = 'Enviando...';
    $despues_click_enviar = 'DESPUÉS DE HACER CLIC EN "ENVIAR"';
    $que_pasa_despues = '¿Qué pasa después?';
    $descripcion_proceso = 'Nosotros nos encargaremos del resto: así es como tu solicitud se convierte en un viaje personalizado.';
    $paso1_titulo = 'Envía tu solicitud de viaje';
    $paso1_desc = 'Comparte tus fechas, destinos y estilo de viaje en el formulario.';
    $paso2_titulo = 'Recibimos tu solicitud';
    $paso2_desc = 'Nuestro equipo registra tu solicitud y te asigna un asesor de viajes.';
    $paso3_titulo = 'Tu asesor prepara tu cotización';
    $paso3_desc = 'Un diseñador de viajes prepara un itinerario personalizado y lo envía a tu correo en breve.';
    $necesitas_ayuda = '¿Necesitas ayuda inmediata?';
    $chatea_con_nosotros = 'Chatea con nosotros';
    $selecciona_fin_tour = '(Selecciona fin de tour)';
    $limpiar = 'Limpiar';
    $cerrar = 'Cerrar';
    $exito = '¡Éxito!';
    $error = 'Error';
    $solicitud_enviada = '¡Solicitud enviada exitosamente!';
    $error_solicitud = 'Error al enviar la solicitud';
}
?>

<section class="py-5 bg-light cta<?php echo esc_attr($cta_type); ?>" id="cta">
    <div class="container">
        
        <div class="text-center mb-4">
            <h2 class="title_section" style="font-family: 'Playfair Display', serif;"><?=$section_title?></h2>
            <p class="description_section"><?=$section_description?></p>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-body p-4 p-md-5">
                        <form action="#" method="POST" class="cta-form" id="personalization-form">
                             <div class="cta-form-block mb-4">
                                        <div class="cta-form-block__icon" aria-hidden="true"><i class="fas fa-hiking"></i></div>
                                        <div class="cta-form-block__body">
                                            <div class="cta-form-block__header">
                                                <div class="cta-form-block__title"><?=$selecciona_tours?></div>
                                                <div class="cta-form-block__hint"><i class="fas fa-info-circle"></i> <?=$elige_hasta_3?></div>
                                            </div>
                                            <div class="tours-selection" id="tours-selection">
                                                <?php
                                                $tour_types = get_terms(array(
                                                    'taxonomy' => 'type',
                                                    'hide_empty' => false,
                                                    'orderby' => 'name',
                                                    'order' => 'ASC',
                                                ));
                                                $imagenes = array();
                                                $tour_count = 0;
                                                if ($tour_types) {
                                                    foreach ($tour_types as $tour_type) {
                                                        $imagen_data = get_field('tipoimagen', 'type_' . $tour_type->term_id);
                                                        $imagen_url = is_array($imagen_data) ? $imagen_data['sizes']['medium_large'] : $imagen_data;
                                                        if (!$imagen_url && is_array($imagen_data)) {
                                                            $imagen_url = $imagen_data['url'];
                                                        }
                                                        $tour_count++;
                                                        ?>
                                                        <div class="tour-option" data-tour="<?=$tour_type->name?>">
                                                            <input type="checkbox" name="tours_interes[]" id="tour-<?=$tour_count?>" value="<?=$tour_type->name?>" class="tour-checkbox">
                                                            <label for="tour-<?=$tour_count?>" class="tour-label">
                                                                <div class="tour-circle rounded-circle border-3">
                                                                    <?php if ($imagen_url): ?>
                                                                        <img src="<?=$imagen_url?>" alt="<?=$tour_type->name?>" loading="lazy" class="rounded-circle">
                                                                    <?php else: ?>
                                                                        <i class="fas fa-tag"></i>
                                                                    <?php endif; ?>
                                                                </div>
                                                                <span class="tour-name fw-medium text-muted small"><?=$tour_type->name?></span>
                                                            </label>
                                                        </div>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                            <div class="cta-form-block mb-4">
                                <div class="cta-form-block__icon" aria-hidden="true"><i class="fas fa-hotel"></i></div>
                                <div class="cta-form-block__body">
                                    <div class="cta-form-block__header">
                                        <div class="cta-form-block__title"><?=$categoria_hotel ?></div>
                                        <div class="cta-form-block__hint"><i class="fas fa-info-circle"></i> <?=$seleccione_uno_mas ?></div>
                                    </div>
                                    <div class="cta-option-group" role="group" aria-label="Categoría de hotel">
                                        <input class="cta-option-input" type="checkbox" name="hotel_cat[]" id="hotel-lujo" value="lujo">
                                        <label class="cta-option" for="hotel-lujo">
                                            <div class="selection-badge"></div>
                                            <div class="cta-option__label"><?=$lujo ?></div>
                                            <div class="cta-option__stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="cta-option__desc">Exclusivo y lujoso</div>
                                        </label>

                                        <input class="cta-option-input" type="checkbox" name="hotel_cat[]" id="hotel-superior" value="superior">
                                        <label class="cta-option" for="hotel-superior">
                                            <div class="selection-badge"></div>
                                            <div class="cta-option__label"><?=$superior ?></div>
                                            <div class="cta-option__stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="cta-option__desc">Alta calidad</div>
                                        </label>

                                        <input class="cta-option-input" type="checkbox" name="hotel_cat[]" id="hotel-mejor-valor" value="mejor-valor">
                                        <label class="cta-option" for="hotel-mejor-valor">
                                            <div class="selection-badge"></div>
                                            <div class="cta-option__label"><?=$mejor_valor ?></div>
                                            <div class="cta-option__stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div class="cta-option__desc">Excelente relación</div>
                                        </label>
                                    </div>
                                    <div class="cta-form-block__note"><small class="text-muted"><?=$opcional_puedes_elegir ?></small></div>
                                </div>
                            </div>

                            <div class="cta-form-block mb-4">
                                <div class="cta-form-block__icon" aria-hidden="true"><i class="fas fa-user-friends"></i></div>
                                <div class="cta-form-block__body">
                                    <div class="cta-form-block__header">
                                        <div class="cta-form-block__title"><?=$numero_viajeros ?></div>
                                        <div class="cta-form-block__hint"><i class="fas fa-user"></i> <?=$seleccione_uno ?></div>
                                    </div>
                                    <div class="cta-chip-group" role="radiogroup" aria-label="Número de viajeros">
                                        <input class="cta-chip-input" type="radio" name="viajeros" id="viajeros-1" value="1">
                                        <label class="cta-chip" for="viajeros-1"><i class="fas fa-user"></i> 1</label>

                                        <input class="cta-chip-input" type="radio" name="viajeros" id="viajeros-2" value="2" checked>
                                        <label class="cta-chip" for="viajeros-2"><i class="fas fa-user"></i> 2</label>

                                        <?php for($i=3; $i<=6; $i++): ?>
                                            <input class="cta-chip-input" type="radio" name="viajeros" id="viajeros-<?=$i ?>" value="<?=$i ?>">
                                            <label class="cta-chip" for="viajeros-<?=$i ?>"><i class="fas fa-user"></i> <?=$i ?></label>
                                        <?php endfor; ?>

                                    </div>
                                </div>
                            </div>

                            <div class="cta-form-block mb-4">
                                <div class="cta-form-block__icon" aria-hidden="true"><i class="fas fa-calendar-alt"></i></div>
                                <div class="cta-form-block__body">
                                    <div class="cta-form-block__header">
                                        <div class="cta-form-block__title"><?=$duracion_viaje ?></div>
                                        <div class="cta-form-block__hint"><i class="fas fa-calendar"></i> <?=$seleccione_uno ?></div>
                                    </div>
                                     <div class="cta-input">
                                        <i class="fas fa-calendar-alt text-muted" aria-hidden="true"></i>
                                        <input type="text" class="form-control" id="fecha-rango" name="fecha_rango" placeholder="<?=$selecciona_rango_fechas ?>" readonly>
                                        <input type="hidden" id="fecha-inicio" name="fecha_inicio">
                                        <input type="hidden" id="fecha-fin" name="fecha_fin">
                                    </div>
                                </div>
                            </div>

                            <div class="cta-form-block cta-form-block--contact mb-4">
                                <div class="cta-form-block__body">
                                    <div class="cta-form-block__header">
                                        <div class="cta-form-block__title"><?=$informacion_contacto ?></div>
                                    </div>

                                    <div class="row g-3">
                                        <div class="col-12">
                                            <div class="cta-input">
                                                <i class="fas fa-user text-muted" aria-hidden="true"></i>
                                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="<?=$nombre_completo ?>" required>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="cta-input">
                                                <i class="fas fa-globe text-muted" aria-hidden="true"></i>
                                                <select class="form-control" id="nacionalidad" name="nacionalidad" required>
                                                    <option value=""><?=$selecciona_nacionalidad ?></option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="cta-input">
                                                <i class="fas fa-phone text-muted" aria-hidden="true"></i>
                                                <span class="cta-input__flag" id="phone-flag" aria-hidden="true"></span>
                                                <span class="cta-input__prefix" id="phone-prefix" aria-hidden="true"></span>
                                                <input type="tel" class="form-control" id="telefono" name="telefono" placeholder="<?=$telefono ?>">
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="cta-input">
                                                <i class="fas fa-envelope text-muted" aria-hidden="true"></i>
                                                <input type="email" class="form-control" id="email" name="email" placeholder="<?=$correo_electronico ?>" required>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="cta-input cta-input--textarea">
                                                <i class="fas fa-pen text-muted" aria-hidden="true"></i>
                                                <textarea class="form-control" id="preguntas" name="preguntas" rows="4" placeholder="<?=$preguntas_placeholder ?>"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg shadow-sm w-100 cta-submit d-flex align-items-center justify-content-center gap-2">
                               <i class="fas fa-paper-plane"></i>
                               <span><?php echo esc_html($enviar); ?></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="card border-0 shadow-lg rounded-4 h-100" style="overflow: visible;">
                    <div class="card-body p-4" style="overflow: visible;">
                        <div class="cta-side-scroll">
                            <div class="cta-side-note text-uppercase fw-bold"><?=$despues_click_enviar; ?></div>
                            <h4 class="card-title fw-bold mb-3"><?=$que_pasa_despues; ?></h4>
                            <p class="text-muted small mb-4"><?=$descripcion_proceso; ?></p>
                            
                            <div class="process-steps cta-steps">
                                <div class="d-flex align-items-start mb-4">
                                    <div class="flex-shrink-0">
                                        <div class="cta-step-num">1</div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="fw-bold mb-1"><?=$paso1_titulo; ?></h6>
                                        <p class="text-muted small mb-0"><?=$paso1_desc; ?></p>
                                    </div>
                                </div>
                                
                                <div class="d-flex align-items-start mb-4">
                                    <div class="flex-shrink-0">
                                        <div class="cta-step-num">2</div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="fw-bold mb-1"><?=$paso2_titulo; ?></h6>
                                        <p class="text-muted small mb-0"><?=$paso2_desc; ?></p>
                                    </div>
                                </div>
                                
                                <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0">
                                        <div class="cta-step-num">3</div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="fw-bold mb-1"><?=$paso3_titulo; ?></h6>
                                        <p class="text-muted small mb-0"><?=$paso3_desc; ?></p>
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4 border-secondary">
                            
                            <div class="text-center">
                                <p class="small text-muted mb-2"><?=$necesitas_ayuda; ?></p>
                                <a href="https://wa.me/51970385269" class="btn btn-success btn-sm w-100 d-flex align-items-center justify-content-center gap-2">
                                    <i class="fab fa-whatsapp"></i>
                                    <span><?=$chatea_con_nosotros; ?></span>
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<script>
document.addEventListener('DOMContentLoaded', function() {
    // =============================================================================
    // CONFIGURACIÓN Y UTILIDADES
    // =============================================================================

    // Función de utilidad para obtener elementos por ID
    const $ = (id) => document.getElementById(id);

    // Referencias principales a elementos del DOM
    const nacionalidadSelect = $('nacionalidad');
    const phoneFlag = $('phone-flag');
    const phonePrefix = $('phone-prefix');
    const tourCheckboxes = document.querySelectorAll('.tour-checkbox');

    // Elementos del calendario
    const fechaRango = $('fecha-rango');
    const fechaInicioHidden = $('fecha-inicio');
    const fechaFinHidden = $('fecha-fin');

    // Estado del calendario
    let startDate = null;
    let endDate = null;
    let currentDate = new Date();

    // =============================================================================
    // UTILIDADES GENERALES
    // =============================================================================

    /**
     * Convierte código de país a emoji de bandera
     * @param {string} countryCode - Código ISO2 del país
     * @returns {string} Emoji de bandera
     */
    const getFlagEmoji = (countryCode) => {
        return countryCode
            .toUpperCase()
            .split('')
            .map(char => String.fromCodePoint(char.charCodeAt(0) + 127397))
            .join('');
    };

    /**
     * Actualiza la visualización de teléfono con bandera y prefijo
     * @param {string} iso2 - Código ISO2 del país
     * @param {string} phoneCode - Código telefónico
     */
    const updatePhoneDisplay = (iso2, phoneCode) => {
        if (phoneFlag) {
            phoneFlag.textContent = getFlagEmoji(iso2);
        }
        if (phonePrefix) {
            phonePrefix.textContent = `+${phoneCode}`;
        }
    };

    /**
     * Formatea una fecha en formato español abreviado
     * @param {string} dateStr - Fecha en formato YYYY-MM-DD
     * @returns {string} Fecha formateada (ej: "15 ene")
     */
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short'
        });
    };

    // =============================================================================
    // GESTIÓN DE TOURS
    // =============================================================================

    /**
     * Gestiona la selección limitada de tours (máximo 3)
     */
    const handleTourSelection = () => {
        const checkedTours = document.querySelectorAll('.tour-checkbox:checked');
        const selectedCount = checkedTours.length;
        const maxTours = 3;

        tourCheckboxes.forEach(checkbox => {
            // Deshabilitar checkbox si ya hay 3 seleccionados y este no está marcado
            checkbox.disabled = (selectedCount >= maxTours && !checkbox.checked);
        });

        // Log para debugging (opcional)
        if (selectedCount > 0) {
            console.log(`Tours seleccionados: ${selectedCount}/${maxTours}`);
        }
    };

    // Asignar eventos a checkboxes de tours
    tourCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleTourSelection);
    });

    // =============================================================================
    // SISTEMA DE CALENDARIO
    // =============================================================================

    if (fechaRango && fechaInicioHidden && fechaFinHidden) {
        // Inyectar HTML del calendario una sola vez
        document.body.insertAdjacentHTML('beforeend', `
            <div id="calendar-popup" style="display: none; position: absolute; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border: 2px solid #e67e22; border-radius: 12px; padding: 15px; box-shadow: 0 8px 32px rgba(230, 126, 34, 0.25); backdrop-filter: blur(10px); animation: slideUp 0.3s ease-out; z-index: 1000; min-width: 320px;">
                <!-- Header del calendario -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; background: linear-gradient(135deg, #e67e22 0%, #d35400 100%); color: white; border-radius: 8px 8px 0 0; margin: -15px -15px 10px -15px; padding: 12px 15px;">
                    <button type="button" id="prev-month" style="background: none; border: none; cursor: pointer; font-size: 18px; color: white; padding: 5px 10px; border-radius: 50%; transition: all 0.3s ease; font-weight: bold;">‹</button>
                    <span id="current-month" style="font-size: 14px; font-weight: 600; text-transform: capitalize;"></span>
                    <button type="button" id="next-month" style="background: none; border: none; cursor: pointer; font-size: 18px; color: white; padding: 5px 10px; border-radius: 50%; transition: all 0.3s ease; font-weight: bold;">›</button>
                </div>

                <!-- Guía de selección -->
                <div id="selection-guide" style="display: none; background: linear-gradient(135deg, #fef9e7 0%, #fdebd0 100%); border: 2px solid #e67e22; border-radius: 8px; padding: 10px; margin-bottom: 10px; text-align: center;">
                    <div style="color: #e67e22; font-weight: 600; font-size: 13px; margin-bottom: 3px;">
                        <i class="fas fa-calendar-check" style="margin-right: 5px;"></i>¡Excelente!
                    </div>
                    <div style="color: #666; font-size: 12px;">
                        Ahora selecciona el <strong>final de tu tour</strong>
                    </div>
                </div>

                <!-- Días de la semana -->
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-size: 12px; margin-bottom: 5px; background: #f8f9fa; border-radius: 6px; padding: 8px;">
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Dom</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Lun</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Mar</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Mié</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Jue</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Vie</div>
                    <div style="font-weight: 600; color: #e67e22; text-transform: uppercase;">Sáb</div>
                </div>

                <!-- Días del calendario -->
                <div id="calendar-days" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px;"></div>

                <!-- Botones de acción -->
                <div style="margin-top: 10px; text-align: center; background: #f8f9fa; border-radius: 8px; padding: 10px;">
                    <button type="button" id="clear-dates" style="background: #f8f9fa; border: 1px solid #ddd; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.3s ease;"><?php echo esc_html($limpiar); ?></button>
                    <button type="button" id="close-calendar" style="background: linear-gradient(135deg, #e67e22 0%, #d35400 100%); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; margin-left: 5px; transition: all 0.3s ease; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;"><?php echo esc_html($cerrar); ?></button>
                </div>
            </div>
        `);

        // Referencias al calendario
        const calendar = $('calendar-popup');
        const currentMonthSpan = $('current-month');
        const calendarDays = $('calendar-days');
        const selectionGuide = $('selection-guide');

        /**
         * Renderiza el calendario para el mes actual
         * @param {Date} date - Fecha del mes a mostrar
         */
        const renderCalendar = (date) => {
            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();

            // Actualizar título del mes
            currentMonthSpan.textContent = new Date(year, month).toLocaleDateString('es-ES', {
                month: 'long',
                year: 'numeric'
            });

            // Limpiar días anteriores
            calendarDays.innerHTML = '';

            // Agregar días vacíos al inicio
            for (let i = 0; i < firstDay; i++) {
                calendarDays.innerHTML += '<div></div>';
            }

            // Agregar días del mes
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDateObj = new Date(year, month, day);
                const dateStr = currentDateObj.toISOString().split('T')[0];
                const isPast = currentDateObj < today.setHours(0, 0, 0, 0);
                const isStart = startDate && dateStr === startDate;
                const isEnd = endDate && dateStr === endDate;
                const isInRange = startDate && endDate && dateStr > startDate && dateStr < endDate;

                // Determinar clases CSS
                let classes = 'calendar-day';
                if (isPast) classes += ' past';
                if (isStart) classes += ' start-date';
                if (isEnd) classes += ' end-date';
                if (isInRange) classes += ' in-range';

                // Generar estilos inline
                let styles = 'padding: 8px; text-align: center; cursor: pointer; border-radius: 8px; transition: all 0.3s ease; position: relative; font-size: 13px; font-weight: 500;';

                if (isPast) {
                    styles += 'color: #dee2e6; cursor: not-allowed; background: #f8f9fa;';
                } else if (isStart) {
                    styles += 'background: linear-gradient(135deg, #e67e22 0%, #d35400 100%) !important; color: white !important; font-weight: 700; box-shadow: 0 4px 12px rgba(230, 126, 34, 0.4); z-index: 2;';
                } else if (isEnd) {
                    styles += 'background: linear-gradient(135deg, #d35400 0%, #e67e22 100%) !important; color: white !important; font-weight: 700; box-shadow: 0 4px 12px rgba(230, 126, 34, 0.4); z-index: 2;';
                } else if (isInRange) {
                    styles += 'background: linear-gradient(135deg, #fef9e7 0%, #fdebd0 100%) !important; color: #e67e22 !important; font-weight: 600; border: 1px solid #f39c12;';
                } else {
                    styles += 'hover: background: #f8f9fa;';
                }

                // Crear elemento del día
                calendarDays.innerHTML += `
                    <div class="${classes}"
                         data-date="${dateStr}"
                         style="${styles}">
                        ${day}
                    </div>
                `;
            }
        };

        // =============================================================================
        // EVENTOS DEL CALENDARIO
        // =============================================================================

        /**
         * Maneja la apertura del calendario
         */
        fechaRango.addEventListener('click', function() {
            const rect = this.getBoundingClientRect();
            calendar.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            calendar.style.left = rect.left + 'px';
            calendar.style.display = 'block';

            // Si ya hay una fecha de inicio, mostrar guía
            if (startDate && !endDate) {
                selectionGuide.style.display = 'block';
            } else {
                selectionGuide.style.display = 'none';
            }

            renderCalendar(currentDate);
        });

        /**
         * Maneja la selección de fechas en el calendario
         */
        calendar.addEventListener('click', function(e) {
            if (!e.target.classList.contains('calendar-day') || e.target.classList.contains('past')) {
                return;
            }

            const selectedDate = e.target.dataset.date;

            if (!startDate) {
                // Primera selección: fecha de inicio
                startDate = selectedDate;
                fechaInicioHidden.value = startDate;
                fechaFinHidden.value = '';

                const startFormatted = new Date(startDate).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
                fechaRango.value = `${startFormatted} - (<?php echo esc_js($selecciona_fin_tour); ?>)`;

                // Mostrar guía inmediatamente
                selectionGuide.style.display = 'block';
                selectionGuide.style.animation = 'slideDown 0.3s ease-out';

                // Animación visual para la fecha seleccionada
                setTimeout(() => {
                    const startElement = calendar.querySelector('.start-date');
                    if (startElement) {
                        startElement.style.animation = 'pulse 1s ease-in-out';
                    }
                }, 100);

            } else if (!endDate) {
                // Segunda selección: fecha de fin
                if (selectedDate >= startDate) {
                    endDate = selectedDate;
                } else {
                    // Si la fecha seleccionada es anterior, invertir
                    endDate = startDate;
                    startDate = selectedDate;
                    fechaInicioHidden.value = startDate;
                }

                fechaFinHidden.value = endDate;

                const startFormatted = new Date(startDate).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
                const endFormatted = new Date(endDate).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
                fechaRango.value = `${startFormatted} - ${endFormatted}`;

                // Ocultar guía y cerrar calendario
                selectionGuide.style.display = 'none';
                setTimeout(() => {
                    calendar.style.display = 'none';
                }, 800);

            } else {
                // Nueva selección completa: reiniciar
                startDate = selectedDate;
                endDate = null;
                fechaInicioHidden.value = startDate;
                fechaFinHidden.value = '';

                const startFormatted = new Date(startDate).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
                fechaRango.value = `${startFormatted} - (<?php echo esc_js($selecciona_fin_tour); ?>)`;

                // Mostrar guía para nueva selección
                selectionGuide.style.display = 'block';
                selectionGuide.style.animation = 'slideDown 0.3s ease-out';
            }

            renderCalendar(currentDate);
        });

        /**
         * Navegación entre meses
         */
        $('prev-month').addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        $('next-month').addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        /**
         * Limpiar selección de fechas
         */
        $('clear-dates').addEventListener('click', function() {
            startDate = null;
            endDate = null;
            fechaInicioHidden.value = '';
            fechaFinHidden.value = '';
            fechaRango.value = '';
            selectionGuide.style.display = 'none';
            renderCalendar(currentDate);
        });

        /**
         * Cerrar calendario
         */
        $('close-calendar').addEventListener('click', function() {
            calendar.style.display = 'none';
        });

        /**
         * Cerrar calendario al hacer clic fuera
         */
        document.addEventListener('click', function(e) {
            if (!calendar.contains(e.target) && e.target !== fechaRango) {
                calendar.style.display = 'none';
            }
        });
    }

    // =============================================================================
    // SELECTOR DE PAÍSES
    // =============================================================================

    if (nacionalidadSelect) {
        let countriesData = [];

        new TomSelect(nacionalidadSelect, {
            valueField: 'iso2',
            labelField: 'countryName',
            searchField: 'countryName',
            create: false,

            load: function(query, callback) {
                const url = '<?php echo get_template_directory_uri(); ?>/js/countries.json';

                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        const currentLang = document.documentElement.lang.slice(0, 2).toLowerCase();
                        countriesData = data.map(country => ({
                            iso2: country.iso2.toUpperCase(),
                            countryName: (currentLang === 'es') ? country.nombre : country.name,
                            phone_code: country.phone_code
                        }));

                        callback(countriesData);
                    })
                    .catch(error => {
                        console.error('Error loading countries:', error);
                        callback();
                    });
            },

            render: {
                option: function(item, escape) {
                    return `<div style="display: flex; align-items: center; background: white; padding: 8px;">
                        <img src="https://flagsapi.com/${escape(item.iso2)}/shiny/24.png"
                             alt="${escape(item.countryName)}"
                             style="margin-right: 8px; height: 20px; vertical-align: middle;">
                        <span>${escape(item.countryName)}</span>
                    </div>`;
                },
                item: function(item, escape) {
                    return `<div style="display: flex; align-items: center; background: white; padding: px;">
                        <img src="https://flagsapi.com/${escape(item.iso2)}/shiny/24.png"
                             alt="${escape(item.countryName)}"
                             style="margin-right: 8px; height: 20px; vertical-align: middle;">
                        <span>${escape(item.countryName)}</span>
                    </div>`;
                }
            },

            onChange: function(value) {
                if (value && countriesData.length > 0) {
                    const selectedCountry = countriesData.find(country => country.iso2 === value);
                    if (selectedCountry) {
                        updatePhoneDisplay(selectedCountry.iso2, selectedCountry.phone_code);
                    }
                }
            }
        });
    } else {
        console.warn('Elemento de selección de nacionalidad no encontrado');
    }

    // =============================================================================
    // MANEJO DEL ENVÍO DEL FORMULARIO
    // =============================================================================

    const form = document.getElementById('personalization-form');
    const submitButton = form.querySelector('.cta-submit');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Deshabilitar botón y mostrar loading
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span><?php echo esc_js($textos['enviando']); ?></span>';
            
            try {
                // Recopilar datos del formulario
                const formData = new FormData(form);
                const data = {};
                
                // Convertir FormData a objeto y manejar arrays
                for (let [key, value] of formData.entries()) {
                    if (key.endsWith('[]')) {
                        const cleanKey = key.slice(0, -2);
                        if (!data[cleanKey]) {
                            data[cleanKey] = [];
                        }
                        data[cleanKey].push(value);
                    } else {
                        data[key] = value;
                    }
                }
                
                // Validar campos requeridos
                const requiredFields = ['nombre', 'nacionalidad', 'telefono', 'email'];
                const missingFields = requiredFields.filter(field => !data[field]);
                
                if (missingFields.length > 0) {
                    throw new Error(`Por favor completa los campos obligatorios: ${missingFields.join(', ')}`);
                }
                
                // Enviar datos al endpoint
                const response = await fetch('<?php echo get_template_directory_uri(); ?>/helpers/perstours.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Mostrar mensaje de éxito
                    showAlert('success', result.message || '<?php echo esc_js($textos['solicitud_enviada']); ?>');
                    
                    // Limpiar formulario
                    form.reset();
                    
                    // Resetear selección de tours
                    document.querySelectorAll('.tour-checkbox:checked').forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    handleTourSelection();
                    
                    // Resetear calendario
                    startDate = null;
                    endDate = null;
                    fechaInicioHidden.value = '';
                    fechaFinHidden.value = '';
                    fechaRango.value = '';
                    
                } else {
                    throw new Error(result.message || '<?php echo esc_js($textos['error_solicitud']); ?>');
                }
                
            } catch (error) {
                console.error('Error al enviar formulario:', error);
                showAlert('error', error.message);
            } finally {
                // Restaurar botón
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> <span><?php echo esc_js($textos['enviar']); ?></span>';
            }
        });
    }

    // Función para mostrar alertas
    function showAlert(type, message) {
        // Crear elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
        alertDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);';
        alertDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            <strong>${type === 'success' ? '<?php echo esc_js($textos['exito']); ?>' : '<?php echo esc_js($textos['error']); ?>'}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-eliminar después de 5 segundos
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
        
        // Cerrar manualmente
        alertDiv.querySelector('.btn-close').addEventListener('click', () => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        });
    }

});
</script>
