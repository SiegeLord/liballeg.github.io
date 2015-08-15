var search_index = [
'ALLEGRO_CONFIG','al_create_config','al_destroy_config','al_load_config_file','al_load_config_file_f','al_save_config_file','al_save_config_file_f','al_add_config_section','al_add_config_comment','al_get_config_value','al_set_config_value','al_get_first_config_section','al_get_next_config_section','al_get_first_config_entry','al_get_next_config_entry','al_merge_config','al_merge_config_into','al_get_d3d_device','al_get_d3d_system_texture','al_get_d3d_video_texture','al_have_d3d_non_pow2_texture_support','al_have_d3d_non_square_texture_support','al_get_d3d_texture_position','ALLEGRO_DISPLAY','al_create_display','al_destroy_display','al_get_new_display_flags','al_get_new_display_refresh_rate','al_get_new_window_position','al_set_new_display_option','al_get_new_display_option','al_reset_new_display_options','al_set_new_display_flags','al_set_new_display_refresh_rate','al_set_new_window_position','al_acknowledge_resize','al_flip_display','al_get_backbuffer','al_get_frontbuffer','al_get_display_flags','al_get_display_format','al_get_display_height','al_get_display_refresh_rate','al_get_display_width','al_get_window_position','al_inhibit_screensaver','al_resize_display','al_set_display_icon','al_get_display_option','al_set_window_position','al_set_window_title','al_toggle_display_flag','al_update_display_region','al_wait_for_vsync','al_get_display_event_source','ALLEGRO_DISPLAY_MODE','al_get_display_mode','al_get_num_display_modes','ALLEGRO_MONITOR_INFO','al_get_new_display_adapter','al_set_new_display_adapter','al_get_monitor_info','al_get_num_video_adapters','ALLEGRO_EVENT','ALLEGRO_USER_EVENT','ALLEGRO_EVENT_QUEUE','ALLEGRO_EVENT_SOURCE','ALLEGRO_EVENT_TYPE','ALLEGRO_GET_EVENT_TYPE','ALLEGRO_EVENT_TYPE_IS_USER','al_create_event_queue','al_init_user_event_source','al_destroy_event_queue','al_destroy_user_event_source','al_drop_next_event','al_emit_user_event','al_event_queue_is_empty','al_flush_event_queue','al_get_event_source_data','al_get_next_event','al_peek_next_event','al_register_event_source','al_set_event_source_data','al_unref_user_event','al_unregister_event_source','al_wait_for_event','al_wait_for_event_timed','al_wait_for_event_until','ALLEGRO_FILE','ALLEGRO_FILE_INTERFACE','ALLEGRO_SEEK','al_fopen','al_fclose','al_fread','al_fwrite','al_fflush','al_ftell','al_fseek','al_feof','al_ferror','al_fungetc','al_fsize','al_fgetc','al_fputc','al_fread16le','al_fread16be','al_fwrite16le','al_fwrite16be','al_fread32le','al_fread32be','al_fwrite32le','al_fwrite32be','al_fgets','al_fget_ustr','al_fputs','al_fopen_fd','al_make_temp_file','al_set_new_file_interface','al_set_standard_file_interface','al_get_new_file_interface','ALLEGRO_FS_ENTRY','ALLEGRO_FILE_MODE','al_create_fs_entry','al_destroy_fs_entry','al_get_fs_entry_name','al_update_fs_entry','al_get_fs_entry_mode','al_get_fs_entry_atime','al_get_fs_entry_ctime','al_get_fs_entry_mtime','al_get_fs_entry_size','al_fs_entry_exists','al_fs_entry_is_file','al_fs_entry_is_directory','al_remove_fs_entry','al_filename_exists','al_remove_filename','al_open_directory','al_read_directory','al_close_directory','al_get_current_directory','al_change_directory','al_make_directory','ALLEGRO_FS_INTERFACE','al_set_fs_interface','al_set_standard_fs_interface','al_get_fs_interface','al_fixed','al_itofix','al_fixtoi','al_fixfloor','al_fixceil','al_ftofix','al_fixtof','al_fixmul','al_fixdiv','al_fixadd','al_fixsub','al_fixtorad_r','al_radtofix_r','al_fixsin','al_fixcos','al_fixtan','al_fixasin','al_fixacos','al_fixatan','al_fixatan2','al_fixsqrt','al_fixhypot','ALLEGRO_COLOR','al_map_rgb','al_map_rgb_f','al_map_rgba','al_map_rgba_f','al_unmap_rgb','al_unmap_rgb_f','al_unmap_rgba','al_unmap_rgba_f','ALLEGRO_LOCKED_REGION','ALLEGRO_PIXEL_FORMAT','al_get_pixel_size','al_get_pixel_format_bits','al_lock_bitmap','al_lock_bitmap_region','al_unlock_bitmap','ALLEGRO_BITMAP','al_clone_bitmap','al_create_bitmap','al_create_sub_bitmap','al_destroy_bitmap','al_get_new_bitmap_flags','al_get_new_bitmap_format','al_set_new_bitmap_flags','al_set_new_bitmap_format','al_get_bitmap_flags','al_get_bitmap_format','al_get_bitmap_height','al_get_bitmap_width','al_get_pixel','al_is_bitmap_locked','al_is_compatible_bitmap','al_is_sub_bitmap','al_clear_to_color','al_draw_bitmap','al_draw_tinted_bitmap','al_draw_bitmap_region','al_draw_tinted_bitmap_region','al_draw_pixel','al_draw_rotated_bitmap','al_draw_tinted_rotated_bitmap','al_draw_rotated_scaled_bitmap','al_draw_tinted_rotated_scaled_bitmap','al_draw_scaled_bitmap','al_draw_tinted_scaled_bitmap','al_get_target_bitmap','al_put_pixel','al_put_blended_pixel','al_set_target_bitmap','al_set_target_backbuffer','al_get_current_display','al_get_blender','al_get_separate_blender','al_set_blender','al_set_separate_blender','al_get_clipping_rectangle','al_set_clipping_rectangle','al_convert_mask_to_alpha','al_hold_bitmap_drawing','al_is_bitmap_drawing_held','al_register_bitmap_loader','al_register_bitmap_saver','al_register_bitmap_loader_f','al_register_bitmap_saver_f','al_load_bitmap','al_load_bitmap_f','al_save_bitmap','al_save_bitmap_f','ALLEGRO_JOYSTICK','ALLEGRO_JOYSTICK_STATE','ALLEGRO_JOYFLAGS','al_install_joystick','al_uninstall_joystick','al_get_num_joysticks','al_get_joystick','al_release_joystick','al_get_joystick_name','al_get_joystick_stick_name','al_get_joystick_axis_name','al_get_joystick_button_name','al_get_joystick_number','al_get_joystick_stick_flags','al_get_joystick_num_sticks','al_get_joystick_num_axes','al_get_joystick_num_buttons','al_get_joystick_state','al_get_joystick_event_source','ALLEGRO_KEYBOARD_STATE','al_install_keyboard','al_is_keyboard_installed','al_uninstall_keyboard','al_get_keyboard_state','al_key_down','al_keycode_to_name','al_set_keyboard_leds','al_get_keyboard_event_source','al_malloc','al_free','al_realloc','al_calloc','al_malloc_with_context','al_free_with_context','al_realloc_with_context','al_calloc_with_context','ALLEGRO_MEMORY_INTERFACE','al_set_memory_interface','ALLEGRO_PI','al_run_main','ALLEGRO_MOUSE_STATE','al_install_mouse','al_is_mouse_installed','al_uninstall_mouse','al_get_mouse_num_axes','al_get_mouse_num_buttons','al_get_mouse_state','al_get_mouse_state_axis','al_mouse_button_down','al_set_mouse_xy','al_set_mouse_z','al_set_mouse_w','al_set_mouse_axis','al_get_mouse_event_source','al_create_mouse_cursor','al_destroy_mouse_cursor','al_set_mouse_cursor','al_set_system_mouse_cursor','al_get_mouse_cursor_position','al_hide_mouse_cursor','al_show_mouse_cursor','al_get_opengl_extension_list','al_get_opengl_proc_address','al_get_opengl_texture','al_get_opengl_texture_size','al_get_opengl_texture_position','al_get_opengl_fbo','al_remove_opengl_fbo','al_is_opengl_extension_supported','al_get_opengl_version','al_create_path','al_create_path_for_directory','al_destroy_path','al_clone_path','al_join_paths','al_get_path_drive','al_get_path_num_components','al_get_path_component','al_get_path_tail','al_get_path_filename','al_get_path_basename','al_get_path_extension','al_set_path_drive','al_append_path_component','al_insert_path_component','al_replace_path_component','al_remove_path_component','al_drop_path_tail','al_set_path_filename','al_set_path_extension','al_path_cstr','al_make_path_absolute','al_make_path_canonical','al_is_path_present','al_get_win_window_handle','ALLEGRO_STATE','ALLEGRO_STATE_FLAGS','al_restore_state','al_store_state','al_get_errno','al_set_errno','al_install_system','al_init','al_uninstall_system','al_get_allegro_version','al_get_standard_path','al_set_app_name','al_set_org_name','al_get_app_name','al_get_org_name','al_get_system_driver','al_get_system_config','ALLEGRO_THREAD','ALLEGRO_MUTEX','ALLEGRO_COND','al_create_thread','al_start_thread','al_join_thread','al_set_thread_should_stop','al_get_thread_should_stop','al_destroy_thread','al_run_detached_thread','al_create_mutex','al_create_mutex_recursive','al_lock_mutex','al_unlock_mutex','al_destroy_mutex','al_create_cond','al_destroy_cond','al_wait_cond','al_wait_cond_timed','al_broadcast_cond','al_signal_cond','ALLEGRO_TIMEOUT','al_current_time','al_init_timeout','al_rest','ALLEGRO_TIMER','ALLEGRO_USECS_TO_SECS','ALLEGRO_MSECS_TO_SECS','ALLEGRO_BPS_TO_SECS','ALLEGRO_BPM_TO_SECS','al_create_timer','al_start_timer','al_stop_timer','al_timer_is_started','al_destroy_timer','al_get_timer_count','al_set_timer_count','al_get_timer_speed','al_set_timer_speed','al_get_timer_event_source','ALLEGRO_TRANSFORM','al_copy_transform','al_use_transform','al_get_current_transform','al_invert_transform','al_check_inverse','al_identity_transform','al_build_transform','al_translate_transform','al_rotate_transform','al_scale_transform','al_transform_coordinates','al_compose_transform','ALLEGRO_USTR','ALLEGRO_USTR_INFO','al_ustr_new','al_ustr_new_from_buffer','al_ustr_newf','al_ustr_free','al_cstr','al_ustr_to_buffer','al_cstr_dup','al_ustr_dup','al_ustr_dup_substr','al_ustr_empty_string','al_ref_cstr','al_ref_buffer','al_ref_ustr','al_ustr_size','al_ustr_length','al_ustr_offset','al_ustr_next','al_ustr_prev','al_ustr_get','al_ustr_get_next','al_ustr_prev_get','al_ustr_insert','al_ustr_insert_cstr','al_ustr_insert_chr','al_ustr_append','al_ustr_append_cstr','al_ustr_append_chr','al_ustr_appendf','al_ustr_vappendf','al_ustr_remove_chr','al_ustr_remove_range','al_ustr_truncate','al_ustr_ltrim_ws','al_ustr_rtrim_ws','al_ustr_trim_ws','al_ustr_assign','al_ustr_assign_substr','al_ustr_assign_cstr','al_ustr_set_chr','al_ustr_replace_range','al_ustr_find_chr','al_ustr_rfind_chr','al_ustr_find_set','al_ustr_find_set_cstr','al_ustr_find_cset','al_ustr_find_cset_cstr','al_ustr_find_ustr','al_ustr_find_cstr','al_ustr_rfind_str','al_ustr_rfind_cstr','al_ustr_find_replace','al_ustr_find_replace_cstr','al_ustr_equal','al_ustr_compare','al_ustr_ncompare','al_ustr_has_prefix','al_ustr_has_prefix_cstr','al_ustr_has_suffix','al_ustr_has_suffix_cstr','al_ustr_new_from_utf16','al_ustr_size_utf16','al_ustr_encode_utf16','al_utf8_width','al_utf8_encode','al_utf16_width','al_utf16_encode','ALLEGRO_AUDIO_DEPTH','ALLEGRO_AUDIO_PAN_NONE','ALLEGRO_CHANNEL_CONF','ALLEGRO_MIXER','ALLEGRO_MIXER_QUALITY','ALLEGRO_PLAYMODE','ALLEGRO_SAMPLE_ID','ALLEGRO_SAMPLE','ALLEGRO_SAMPLE_INSTANCE','ALLEGRO_AUDIO_STREAM','ALLEGRO_VOICE','al_install_audio','al_uninstall_audio','al_is_audio_installed','al_reserve_samples','al_get_allegro_audio_version','al_get_audio_depth_size','al_get_channel_count','al_create_voice','al_destroy_voice','al_detach_voice','al_attach_audio_stream_to_voice','al_attach_mixer_to_voice','al_attach_sample_instance_to_voice','al_get_voice_frequency','al_get_voice_channels','al_get_voice_depth','al_get_voice_playing','al_set_voice_playing','al_get_voice_position','al_set_voice_position','al_create_sample','al_destroy_sample','al_play_sample','al_stop_sample','al_stop_samples','al_get_sample_channels','al_get_sample_depth','al_get_sample_frequency','al_get_sample_length','al_get_sample_data','al_create_sample_instance','al_destroy_sample_instance','al_play_sample_instance','al_stop_sample_instance','al_get_sample_instance_channels','al_get_sample_instance_depth','al_get_sample_instance_frequency','al_get_sample_instance_length','al_set_sample_instance_length','al_get_sample_instance_position','al_set_sample_instance_position','al_get_sample_instance_speed','al_set_sample_instance_speed','al_get_sample_instance_gain','al_set_sample_instance_gain','al_get_sample_instance_pan','al_set_sample_instance_pan','al_get_sample_instance_time','al_get_sample_instance_playmode','al_set_sample_instance_playmode','al_get_sample_instance_playing','al_set_sample_instance_playing','al_get_sample_instance_attached','al_detach_sample_instance','al_get_sample','al_set_sample','al_create_mixer','al_destroy_mixer','al_get_default_mixer','al_set_default_mixer','al_restore_default_mixer','al_attach_mixer_to_mixer','al_attach_sample_instance_to_mixer','al_attach_audio_stream_to_mixer','al_get_mixer_frequency','al_set_mixer_frequency','al_get_mixer_channels','al_get_mixer_depth','al_get_mixer_quality','al_set_mixer_quality','al_get_mixer_playing','al_set_mixer_playing','al_get_mixer_attached','al_detach_mixer','al_set_mixer_postprocess_callback','al_create_audio_stream','al_destroy_audio_stream','al_get_audio_stream_event_source','al_drain_audio_stream','al_rewind_audio_stream','al_get_audio_stream_frequency','al_get_audio_stream_channels','al_get_audio_stream_depth','al_get_audio_stream_length','al_get_audio_stream_speed','al_set_audio_stream_speed','al_get_audio_stream_gain','al_set_audio_stream_gain','al_get_audio_stream_pan','al_set_audio_stream_pan','al_get_audio_stream_playing','al_set_audio_stream_playing','al_get_audio_stream_playmode','al_set_audio_stream_playmode','al_get_audio_stream_attached','al_detach_audio_stream','al_get_audio_stream_fragment','al_set_audio_stream_fragment','al_get_audio_stream_fragments','al_get_available_audio_stream_fragments','al_seek_audio_stream_secs','al_get_audio_stream_position_secs','al_get_audio_stream_length_secs','al_set_audio_stream_loop_secs','al_register_sample_loader','al_register_sample_loader_f','al_register_sample_saver','al_register_sample_saver_f','al_register_audio_stream_loader','al_register_audio_stream_loader_f','al_load_sample','al_load_sample_f','al_load_audio_stream','al_load_audio_stream_f','al_save_sample','al_save_sample_f','al_init_acodec_addon','al_get_allegro_acodec_version','al_color_cmyk','al_color_cmyk_to_rgb','al_color_hsl','al_color_hsl_to_rgb','al_color_hsv','al_color_hsv_to_rgb','al_color_html','al_color_html_to_rgb','al_color_rgb_to_html','al_color_name','al_color_name_to_rgb','al_color_rgb_to_cmyk','al_color_rgb_to_hsl','al_color_rgb_to_hsv','al_color_rgb_to_name','al_color_rgb_to_yuv','al_color_yuv','al_color_yuv_to_rgb','al_get_allegro_color_version','ALLEGRO_FONT','al_init_font_addon','al_shutdown_font_addon','al_load_font','al_destroy_font','al_register_font_loader','al_get_font_line_height','al_get_font_ascent','al_get_font_descent','al_get_text_width','al_get_ustr_width','al_draw_text','al_draw_ustr','al_draw_justified_text','al_draw_justified_ustr','al_draw_textf','al_draw_justified_textf','al_get_text_dimensions','al_get_ustr_dimensions','al_get_allegro_font_version','al_grab_font_from_bitmap','al_load_bitmap_font','al_init_ttf_addon','al_load_ttf_font','al_load_ttf_font_f','al_get_allegro_ttf_version','al_init_image_addon','al_shutdown_image_addon','al_get_allegro_image_version','ALLEGRO_NATIVE_DIALOG','al_create_native_file_dialog','al_show_native_file_dialog','al_get_native_file_dialog_count','al_get_native_file_dialog_path','al_destroy_native_dialog','al_show_native_message_box','al_open_native_text_log','al_close_native_text_log','al_append_native_text_log','al_get_native_dialog_event_source','al_get_allegro_native_dialog_version','al_set_physfs_file_interface','al_get_allegro_physfs_version','al_get_allegro_primitives_version','al_init_primitives_addon','al_shutdown_primitives_addon','al_draw_line','al_draw_triangle','al_draw_filled_triangle','al_draw_rectangle','al_draw_filled_rectangle','al_draw_rounded_rectangle','al_draw_filled_rounded_rectangle','al_calculate_arc','al_draw_ellipse','al_draw_filled_ellipse','al_draw_circle','al_draw_filled_circle','al_draw_arc','al_calculate_spline','al_draw_spline','al_calculate_ribbon','al_draw_ribbon','al_draw_prim','al_draw_indexed_prim','al_create_vertex_decl','al_destroy_vertex_decl','al_draw_soft_triangle','al_draw_soft_line','ALLEGRO_VERTEX','ALLEGRO_VERTEX_DECL','ALLEGRO_VERTEX_ELEMENT','ALLEGRO_PRIM_TYPE','ALLEGRO_PRIM_ATTR','ALLEGRO_PRIM_STORAGE','ALLEGRO_VERTEX_CACHE_SIZE','ALLEGRO_PRIM_QUALITY',]
var search_urls = [
'config.html#allegro_config','config.html#al_create_config','config.html#al_destroy_config','config.html#al_load_config_file','config.html#al_load_config_file_f','config.html#al_save_config_file','config.html#al_save_config_file_f','config.html#al_add_config_section','config.html#al_add_config_comment','config.html#al_get_config_value','config.html#al_set_config_value','config.html#al_get_first_config_section','config.html#al_get_next_config_section','config.html#al_get_first_config_entry','config.html#al_get_next_config_entry','config.html#al_merge_config','config.html#al_merge_config_into','direct3d.html#al_get_d3d_device','direct3d.html#al_get_d3d_system_texture','direct3d.html#al_get_d3d_video_texture','direct3d.html#al_have_d3d_non_pow2_texture_support','direct3d.html#al_have_d3d_non_square_texture_support','direct3d.html#al_get_d3d_texture_position','display.html#allegro_display','display.html#al_create_display','display.html#al_destroy_display','display.html#al_get_new_display_flags','display.html#al_get_new_display_refresh_rate','display.html#al_get_new_window_position','display.html#al_set_new_display_option','display.html#al_get_new_display_option','display.html#al_reset_new_display_options','display.html#al_set_new_display_flags','display.html#al_set_new_display_refresh_rate','display.html#al_set_new_window_position','display.html#al_acknowledge_resize','display.html#al_flip_display','display.html#al_get_backbuffer','display.html#al_get_frontbuffer','display.html#al_get_display_flags','display.html#al_get_display_format','display.html#al_get_display_height','display.html#al_get_display_refresh_rate','display.html#al_get_display_width','display.html#al_get_window_position','display.html#al_inhibit_screensaver','display.html#al_resize_display','display.html#al_set_display_icon','display.html#al_get_display_option','display.html#al_set_window_position','display.html#al_set_window_title','display.html#al_toggle_display_flag','display.html#al_update_display_region','display.html#al_wait_for_vsync','display.html#al_get_display_event_source','display.html#allegro_display_mode','display.html#al_get_display_mode','display.html#al_get_num_display_modes','display.html#allegro_monitor_info','display.html#al_get_new_display_adapter','display.html#al_set_new_display_adapter','display.html#al_get_monitor_info','display.html#al_get_num_video_adapters','events.html#allegro_event','events.html#allegro_user_event','events.html#allegro_event_queue','events.html#allegro_event_source','events.html#allegro_event_type','events.html#allegro_get_event_type','events.html#allegro_event_type_is_user','events.html#al_create_event_queue','events.html#al_init_user_event_source','events.html#al_destroy_event_queue','events.html#al_destroy_user_event_source','events.html#al_drop_next_event','events.html#al_emit_user_event','events.html#al_event_queue_is_empty','events.html#al_flush_event_queue','events.html#al_get_event_source_data','events.html#al_get_next_event','events.html#al_peek_next_event','events.html#al_register_event_source','events.html#al_set_event_source_data','events.html#al_unref_user_event','events.html#al_unregister_event_source','events.html#al_wait_for_event','events.html#al_wait_for_event_timed','events.html#al_wait_for_event_until','file.html#allegro_file','file.html#allegro_file_interface','file.html#allegro_seek','file.html#al_fopen','file.html#al_fclose','file.html#al_fread','file.html#al_fwrite','file.html#al_fflush','file.html#al_ftell','file.html#al_fseek','file.html#al_feof','file.html#al_ferror','file.html#al_fungetc','file.html#al_fsize','file.html#al_fgetc','file.html#al_fputc','file.html#al_fread16le','file.html#al_fread16be','file.html#al_fwrite16le','file.html#al_fwrite16be','file.html#al_fread32le','file.html#al_fread32be','file.html#al_fwrite32le','file.html#al_fwrite32be','file.html#al_fgets','file.html#al_fget_ustr','file.html#al_fputs','file.html#al_fopen_fd','file.html#al_make_temp_file','file.html#al_set_new_file_interface','file.html#al_set_standard_file_interface','file.html#al_get_new_file_interface','fshook.html#allegro_fs_entry','fshook.html#allegro_file_mode','fshook.html#al_create_fs_entry','fshook.html#al_destroy_fs_entry','fshook.html#al_get_fs_entry_name','fshook.html#al_update_fs_entry','fshook.html#al_get_fs_entry_mode','fshook.html#al_get_fs_entry_atime','fshook.html#al_get_fs_entry_ctime','fshook.html#al_get_fs_entry_mtime','fshook.html#al_get_fs_entry_size','fshook.html#al_fs_entry_exists','fshook.html#al_fs_entry_is_file','fshook.html#al_fs_entry_is_directory','fshook.html#al_remove_fs_entry','fshook.html#al_filename_exists','fshook.html#al_remove_filename','fshook.html#al_open_directory','fshook.html#al_read_directory','fshook.html#al_close_directory','fshook.html#al_get_current_directory','fshook.html#al_change_directory','fshook.html#al_make_directory','fshook.html#allegro_fs_interface','fshook.html#al_set_fs_interface','fshook.html#al_set_standard_fs_interface','fshook.html#al_get_fs_interface','fixed.html#al_fixed','fixed.html#al_itofix','fixed.html#al_fixtoi','fixed.html#al_fixfloor','fixed.html#al_fixceil','fixed.html#al_ftofix','fixed.html#al_fixtof','fixed.html#al_fixmul','fixed.html#al_fixdiv','fixed.html#al_fixadd','fixed.html#al_fixsub','fixed.html#al_fixtorad_r','fixed.html#al_radtofix_r','fixed.html#al_fixsin','fixed.html#al_fixcos','fixed.html#al_fixtan','fixed.html#al_fixasin','fixed.html#al_fixacos','fixed.html#al_fixatan','fixed.html#al_fixatan2','fixed.html#al_fixsqrt','fixed.html#al_fixhypot','graphics.html#allegro_color','graphics.html#al_map_rgb','graphics.html#al_map_rgb_f','graphics.html#al_map_rgba','graphics.html#al_map_rgba_f','graphics.html#al_unmap_rgb','graphics.html#al_unmap_rgb_f','graphics.html#al_unmap_rgba','graphics.html#al_unmap_rgba_f','graphics.html#allegro_locked_region','graphics.html#allegro_pixel_format','graphics.html#al_get_pixel_size','graphics.html#al_get_pixel_format_bits','graphics.html#al_lock_bitmap','graphics.html#al_lock_bitmap_region','graphics.html#al_unlock_bitmap','graphics.html#allegro_bitmap','graphics.html#al_clone_bitmap','graphics.html#al_create_bitmap','graphics.html#al_create_sub_bitmap','graphics.html#al_destroy_bitmap','graphics.html#al_get_new_bitmap_flags','graphics.html#al_get_new_bitmap_format','graphics.html#al_set_new_bitmap_flags','graphics.html#al_set_new_bitmap_format','graphics.html#al_get_bitmap_flags','graphics.html#al_get_bitmap_format','graphics.html#al_get_bitmap_height','graphics.html#al_get_bitmap_width','graphics.html#al_get_pixel','graphics.html#al_is_bitmap_locked','graphics.html#al_is_compatible_bitmap','graphics.html#al_is_sub_bitmap','graphics.html#al_clear_to_color','graphics.html#al_draw_bitmap','graphics.html#al_draw_tinted_bitmap','graphics.html#al_draw_bitmap_region','graphics.html#al_draw_tinted_bitmap_region','graphics.html#al_draw_pixel','graphics.html#al_draw_rotated_bitmap','graphics.html#al_draw_tinted_rotated_bitmap','graphics.html#al_draw_rotated_scaled_bitmap','graphics.html#al_draw_tinted_rotated_scaled_bitmap','graphics.html#al_draw_scaled_bitmap','graphics.html#al_draw_tinted_scaled_bitmap','graphics.html#al_get_target_bitmap','graphics.html#al_put_pixel','graphics.html#al_put_blended_pixel','graphics.html#al_set_target_bitmap','graphics.html#al_set_target_backbuffer','graphics.html#al_get_current_display','graphics.html#al_get_blender','graphics.html#al_get_separate_blender','graphics.html#al_set_blender','graphics.html#al_set_separate_blender','graphics.html#al_get_clipping_rectangle','graphics.html#al_set_clipping_rectangle','graphics.html#al_convert_mask_to_alpha','graphics.html#al_hold_bitmap_drawing','graphics.html#al_is_bitmap_drawing_held','graphics.html#al_register_bitmap_loader','graphics.html#al_register_bitmap_saver','graphics.html#al_register_bitmap_loader_f','graphics.html#al_register_bitmap_saver_f','graphics.html#al_load_bitmap','graphics.html#al_load_bitmap_f','graphics.html#al_save_bitmap','graphics.html#al_save_bitmap_f','joystick.html#allegro_joystick','joystick.html#allegro_joystick_state','joystick.html#allegro_joyflags','joystick.html#al_install_joystick','joystick.html#al_uninstall_joystick','joystick.html#al_get_num_joysticks','joystick.html#al_get_joystick','joystick.html#al_release_joystick','joystick.html#al_get_joystick_name','joystick.html#al_get_joystick_stick_name','joystick.html#al_get_joystick_axis_name','joystick.html#al_get_joystick_button_name','joystick.html#al_get_joystick_number','joystick.html#al_get_joystick_stick_flags','joystick.html#al_get_joystick_num_sticks','joystick.html#al_get_joystick_num_axes','joystick.html#al_get_joystick_num_buttons','joystick.html#al_get_joystick_state','joystick.html#al_get_joystick_event_source','keyboard.html#allegro_keyboard_state','keyboard.html#al_install_keyboard','keyboard.html#al_is_keyboard_installed','keyboard.html#al_uninstall_keyboard','keyboard.html#al_get_keyboard_state','keyboard.html#al_key_down','keyboard.html#al_keycode_to_name','keyboard.html#al_set_keyboard_leds','keyboard.html#al_get_keyboard_event_source','memory.html#al_malloc','memory.html#al_free','memory.html#al_realloc','memory.html#al_calloc','memory.html#al_malloc_with_context','memory.html#al_free_with_context','memory.html#al_realloc_with_context','memory.html#al_calloc_with_context','memory.html#allegro_memory_interface','memory.html#al_set_memory_interface','misc.html#allegro_pi','misc.html#al_run_main','mouse.html#allegro_mouse_state','mouse.html#al_install_mouse','mouse.html#al_is_mouse_installed','mouse.html#al_uninstall_mouse','mouse.html#al_get_mouse_num_axes','mouse.html#al_get_mouse_num_buttons','mouse.html#al_get_mouse_state','mouse.html#al_get_mouse_state_axis','mouse.html#al_mouse_button_down','mouse.html#al_set_mouse_xy','mouse.html#al_set_mouse_z','mouse.html#al_set_mouse_w','mouse.html#al_set_mouse_axis','mouse.html#al_get_mouse_event_source','mouse.html#al_create_mouse_cursor','mouse.html#al_destroy_mouse_cursor','mouse.html#al_set_mouse_cursor','mouse.html#al_set_system_mouse_cursor','mouse.html#al_get_mouse_cursor_position','mouse.html#al_hide_mouse_cursor','mouse.html#al_show_mouse_cursor','opengl.html#al_get_opengl_extension_list','opengl.html#al_get_opengl_proc_address','opengl.html#al_get_opengl_texture','opengl.html#al_get_opengl_texture_size','opengl.html#al_get_opengl_texture_position','opengl.html#al_get_opengl_fbo','opengl.html#al_remove_opengl_fbo','opengl.html#al_is_opengl_extension_supported','opengl.html#al_get_opengl_version','path.html#al_create_path','path.html#al_create_path_for_directory','path.html#al_destroy_path','path.html#al_clone_path','path.html#al_join_paths','path.html#al_get_path_drive','path.html#al_get_path_num_components','path.html#al_get_path_component','path.html#al_get_path_tail','path.html#al_get_path_filename','path.html#al_get_path_basename','path.html#al_get_path_extension','path.html#al_set_path_drive','path.html#al_append_path_component','path.html#al_insert_path_component','path.html#al_replace_path_component','path.html#al_remove_path_component','path.html#al_drop_path_tail','path.html#al_set_path_filename','path.html#al_set_path_extension','path.html#al_path_cstr','path.html#al_make_path_absolute','path.html#al_make_path_canonical','path.html#al_is_path_present','platform.html#al_get_win_window_handle','state.html#allegro_state','state.html#allegro_state_flags','state.html#al_restore_state','state.html#al_store_state','state.html#al_get_errno','state.html#al_set_errno','system.html#al_install_system','system.html#al_init','system.html#al_uninstall_system','system.html#al_get_allegro_version','system.html#al_get_standard_path','system.html#al_set_app_name','system.html#al_set_org_name','system.html#al_get_app_name','system.html#al_get_org_name','system.html#al_get_system_driver','system.html#al_get_system_config','threads.html#allegro_thread','threads.html#allegro_mutex','threads.html#allegro_cond','threads.html#al_create_thread','threads.html#al_start_thread','threads.html#al_join_thread','threads.html#al_set_thread_should_stop','threads.html#al_get_thread_should_stop','threads.html#al_destroy_thread','threads.html#al_run_detached_thread','threads.html#al_create_mutex','threads.html#al_create_mutex_recursive','threads.html#al_lock_mutex','threads.html#al_unlock_mutex','threads.html#al_destroy_mutex','threads.html#al_create_cond','threads.html#al_destroy_cond','threads.html#al_wait_cond','threads.html#al_wait_cond_timed','threads.html#al_broadcast_cond','threads.html#al_signal_cond','time.html#allegro_timeout','time.html#al_current_time','time.html#al_init_timeout','time.html#al_rest','timer.html#allegro_timer','timer.html#allegro_usecs_to_secs','timer.html#allegro_msecs_to_secs','timer.html#allegro_bps_to_secs','timer.html#allegro_bpm_to_secs','timer.html#al_create_timer','timer.html#al_start_timer','timer.html#al_stop_timer','timer.html#al_timer_is_started','timer.html#al_destroy_timer','timer.html#al_get_timer_count','timer.html#al_set_timer_count','timer.html#al_get_timer_speed','timer.html#al_set_timer_speed','timer.html#al_get_timer_event_source','transformations.html#allegro_transform','transformations.html#al_copy_transform','transformations.html#al_use_transform','transformations.html#al_get_current_transform','transformations.html#al_invert_transform','transformations.html#al_check_inverse','transformations.html#al_identity_transform','transformations.html#al_build_transform','transformations.html#al_translate_transform','transformations.html#al_rotate_transform','transformations.html#al_scale_transform','transformations.html#al_transform_coordinates','transformations.html#al_compose_transform','utf8.html#allegro_ustr','utf8.html#allegro_ustr_info','utf8.html#al_ustr_new','utf8.html#al_ustr_new_from_buffer','utf8.html#al_ustr_newf','utf8.html#al_ustr_free','utf8.html#al_cstr','utf8.html#al_ustr_to_buffer','utf8.html#al_cstr_dup','utf8.html#al_ustr_dup','utf8.html#al_ustr_dup_substr','utf8.html#al_ustr_empty_string','utf8.html#al_ref_cstr','utf8.html#al_ref_buffer','utf8.html#al_ref_ustr','utf8.html#al_ustr_size','utf8.html#al_ustr_length','utf8.html#al_ustr_offset','utf8.html#al_ustr_next','utf8.html#al_ustr_prev','utf8.html#al_ustr_get','utf8.html#al_ustr_get_next','utf8.html#al_ustr_prev_get','utf8.html#al_ustr_insert','utf8.html#al_ustr_insert_cstr','utf8.html#al_ustr_insert_chr','utf8.html#al_ustr_append','utf8.html#al_ustr_append_cstr','utf8.html#al_ustr_append_chr','utf8.html#al_ustr_appendf','utf8.html#al_ustr_vappendf','utf8.html#al_ustr_remove_chr','utf8.html#al_ustr_remove_range','utf8.html#al_ustr_truncate','utf8.html#al_ustr_ltrim_ws','utf8.html#al_ustr_rtrim_ws','utf8.html#al_ustr_trim_ws','utf8.html#al_ustr_assign','utf8.html#al_ustr_assign_substr','utf8.html#al_ustr_assign_cstr','utf8.html#al_ustr_set_chr','utf8.html#al_ustr_replace_range','utf8.html#al_ustr_find_chr','utf8.html#al_ustr_rfind_chr','utf8.html#al_ustr_find_set','utf8.html#al_ustr_find_set_cstr','utf8.html#al_ustr_find_cset','utf8.html#al_ustr_find_cset_cstr','utf8.html#al_ustr_find_ustr','utf8.html#al_ustr_find_cstr','utf8.html#al_ustr_rfind_str','utf8.html#al_ustr_rfind_cstr','utf8.html#al_ustr_find_replace','utf8.html#al_ustr_find_replace_cstr','utf8.html#al_ustr_equal','utf8.html#al_ustr_compare','utf8.html#al_ustr_ncompare','utf8.html#al_ustr_has_prefix','utf8.html#al_ustr_has_prefix_cstr','utf8.html#al_ustr_has_suffix','utf8.html#al_ustr_has_suffix_cstr','utf8.html#al_ustr_new_from_utf16','utf8.html#al_ustr_size_utf16','utf8.html#al_ustr_encode_utf16','utf8.html#al_utf8_width','utf8.html#al_utf8_encode','utf8.html#al_utf16_width','utf8.html#al_utf16_encode','audio.html#allegro_audio_depth','audio.html#allegro_audio_pan_none','audio.html#allegro_channel_conf','audio.html#allegro_mixer','audio.html#allegro_mixer_quality','audio.html#allegro_playmode','audio.html#allegro_sample_id','audio.html#allegro_sample','audio.html#allegro_sample_instance','audio.html#allegro_audio_stream','audio.html#allegro_voice','audio.html#al_install_audio','audio.html#al_uninstall_audio','audio.html#al_is_audio_installed','audio.html#al_reserve_samples','audio.html#al_get_allegro_audio_version','audio.html#al_get_audio_depth_size','audio.html#al_get_channel_count','audio.html#al_create_voice','audio.html#al_destroy_voice','audio.html#al_detach_voice','audio.html#al_attach_audio_stream_to_voice','audio.html#al_attach_mixer_to_voice','audio.html#al_attach_sample_instance_to_voice','audio.html#al_get_voice_frequency','audio.html#al_get_voice_channels','audio.html#al_get_voice_depth','audio.html#al_get_voice_playing','audio.html#al_set_voice_playing','audio.html#al_get_voice_position','audio.html#al_set_voice_position','audio.html#al_create_sample','audio.html#al_destroy_sample','audio.html#al_play_sample','audio.html#al_stop_sample','audio.html#al_stop_samples','audio.html#al_get_sample_channels','audio.html#al_get_sample_depth','audio.html#al_get_sample_frequency','audio.html#al_get_sample_length','audio.html#al_get_sample_data','audio.html#al_create_sample_instance','audio.html#al_destroy_sample_instance','audio.html#al_play_sample_instance','audio.html#al_stop_sample_instance','audio.html#al_get_sample_instance_channels','audio.html#al_get_sample_instance_depth','audio.html#al_get_sample_instance_frequency','audio.html#al_get_sample_instance_length','audio.html#al_set_sample_instance_length','audio.html#al_get_sample_instance_position','audio.html#al_set_sample_instance_position','audio.html#al_get_sample_instance_speed','audio.html#al_set_sample_instance_speed','audio.html#al_get_sample_instance_gain','audio.html#al_set_sample_instance_gain','audio.html#al_get_sample_instance_pan','audio.html#al_set_sample_instance_pan','audio.html#al_get_sample_instance_time','audio.html#al_get_sample_instance_playmode','audio.html#al_set_sample_instance_playmode','audio.html#al_get_sample_instance_playing','audio.html#al_set_sample_instance_playing','audio.html#al_get_sample_instance_attached','audio.html#al_detach_sample_instance','audio.html#al_get_sample','audio.html#al_set_sample','audio.html#al_create_mixer','audio.html#al_destroy_mixer','audio.html#al_get_default_mixer','audio.html#al_set_default_mixer','audio.html#al_restore_default_mixer','audio.html#al_attach_mixer_to_mixer','audio.html#al_attach_sample_instance_to_mixer','audio.html#al_attach_audio_stream_to_mixer','audio.html#al_get_mixer_frequency','audio.html#al_set_mixer_frequency','audio.html#al_get_mixer_channels','audio.html#al_get_mixer_depth','audio.html#al_get_mixer_quality','audio.html#al_set_mixer_quality','audio.html#al_get_mixer_playing','audio.html#al_set_mixer_playing','audio.html#al_get_mixer_attached','audio.html#al_detach_mixer','audio.html#al_set_mixer_postprocess_callback','audio.html#al_create_audio_stream','audio.html#al_destroy_audio_stream','audio.html#al_get_audio_stream_event_source','audio.html#al_drain_audio_stream','audio.html#al_rewind_audio_stream','audio.html#al_get_audio_stream_frequency','audio.html#al_get_audio_stream_channels','audio.html#al_get_audio_stream_depth','audio.html#al_get_audio_stream_length','audio.html#al_get_audio_stream_speed','audio.html#al_set_audio_stream_speed','audio.html#al_get_audio_stream_gain','audio.html#al_set_audio_stream_gain','audio.html#al_get_audio_stream_pan','audio.html#al_set_audio_stream_pan','audio.html#al_get_audio_stream_playing','audio.html#al_set_audio_stream_playing','audio.html#al_get_audio_stream_playmode','audio.html#al_set_audio_stream_playmode','audio.html#al_get_audio_stream_attached','audio.html#al_detach_audio_stream','audio.html#al_get_audio_stream_fragment','audio.html#al_set_audio_stream_fragment','audio.html#al_get_audio_stream_fragments','audio.html#al_get_available_audio_stream_fragments','audio.html#al_seek_audio_stream_secs','audio.html#al_get_audio_stream_position_secs','audio.html#al_get_audio_stream_length_secs','audio.html#al_set_audio_stream_loop_secs','audio.html#al_register_sample_loader','audio.html#al_register_sample_loader_f','audio.html#al_register_sample_saver','audio.html#al_register_sample_saver_f','audio.html#al_register_audio_stream_loader','audio.html#al_register_audio_stream_loader_f','audio.html#al_load_sample','audio.html#al_load_sample_f','audio.html#al_load_audio_stream','audio.html#al_load_audio_stream_f','audio.html#al_save_sample','audio.html#al_save_sample_f','acodec.html#al_init_acodec_addon','acodec.html#al_get_allegro_acodec_version','color.html#al_color_cmyk','color.html#al_color_cmyk_to_rgb','color.html#al_color_hsl','color.html#al_color_hsl_to_rgb','color.html#al_color_hsv','color.html#al_color_hsv_to_rgb','color.html#al_color_html','color.html#al_color_html_to_rgb','color.html#al_color_rgb_to_html','color.html#al_color_name','color.html#al_color_name_to_rgb','color.html#al_color_rgb_to_cmyk','color.html#al_color_rgb_to_hsl','color.html#al_color_rgb_to_hsv','color.html#al_color_rgb_to_name','color.html#al_color_rgb_to_yuv','color.html#al_color_yuv','color.html#al_color_yuv_to_rgb','color.html#al_get_allegro_color_version','font.html#allegro_font','font.html#al_init_font_addon','font.html#al_shutdown_font_addon','font.html#al_load_font','font.html#al_destroy_font','font.html#al_register_font_loader','font.html#al_get_font_line_height','font.html#al_get_font_ascent','font.html#al_get_font_descent','font.html#al_get_text_width','font.html#al_get_ustr_width','font.html#al_draw_text','font.html#al_draw_ustr','font.html#al_draw_justified_text','font.html#al_draw_justified_ustr','font.html#al_draw_textf','font.html#al_draw_justified_textf','font.html#al_get_text_dimensions','font.html#al_get_ustr_dimensions','font.html#al_get_allegro_font_version','font.html#al_grab_font_from_bitmap','font.html#al_load_bitmap_font','font.html#al_init_ttf_addon','font.html#al_load_ttf_font','font.html#al_load_ttf_font_f','font.html#al_get_allegro_ttf_version','image.html#al_init_image_addon','image.html#al_shutdown_image_addon','image.html#al_get_allegro_image_version','native_dialog.html#allegro_native_dialog','native_dialog.html#al_create_native_file_dialog','native_dialog.html#al_show_native_file_dialog','native_dialog.html#al_get_native_file_dialog_count','native_dialog.html#al_get_native_file_dialog_path','native_dialog.html#al_destroy_native_dialog','native_dialog.html#al_show_native_message_box','native_dialog.html#al_open_native_text_log','native_dialog.html#al_close_native_text_log','native_dialog.html#al_append_native_text_log','native_dialog.html#al_get_native_dialog_event_source','native_dialog.html#al_get_allegro_native_dialog_version','physfs.html#al_set_physfs_file_interface','physfs.html#al_get_allegro_physfs_version','primitives.html#al_get_allegro_primitives_version','primitives.html#al_init_primitives_addon','primitives.html#al_shutdown_primitives_addon','primitives.html#al_draw_line','primitives.html#al_draw_triangle','primitives.html#al_draw_filled_triangle','primitives.html#al_draw_rectangle','primitives.html#al_draw_filled_rectangle','primitives.html#al_draw_rounded_rectangle','primitives.html#al_draw_filled_rounded_rectangle','primitives.html#al_calculate_arc','primitives.html#al_draw_ellipse','primitives.html#al_draw_filled_ellipse','primitives.html#al_draw_circle','primitives.html#al_draw_filled_circle','primitives.html#al_draw_arc','primitives.html#al_calculate_spline','primitives.html#al_draw_spline','primitives.html#al_calculate_ribbon','primitives.html#al_draw_ribbon','primitives.html#al_draw_prim','primitives.html#al_draw_indexed_prim','primitives.html#al_create_vertex_decl','primitives.html#al_destroy_vertex_decl','primitives.html#al_draw_soft_triangle','primitives.html#al_draw_soft_line','primitives.html#allegro_vertex','primitives.html#allegro_vertex_decl','primitives.html#allegro_vertex_element','primitives.html#allegro_prim_type','primitives.html#allegro_prim_attr','primitives.html#allegro_prim_storage','primitives.html#allegro_vertex_cache_size','primitives.html#allegro_prim_quality',]
